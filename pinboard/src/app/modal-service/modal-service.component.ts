import { ChangeDetectorRef, Component, TemplateRef ,OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from "../api.service";
@Component({
  selector: 'app-modal-service',
  templateUrl: './modal-service.component.html',
  styleUrls: ['./modal-service.component.css']
})
export class ModalServiceComponent implements OnInit {
  uploadedFile: File  ;
  formData: FormData;
  pin:any = { title:"",content:""};
  modalRef: BsModalRef;
  error:boolean;
  errorMessage:string;
  successMessage:string;
  sucessResponse:boolean;
  loading:boolean;
  loadingMessage;
    
  constructor(private modalService: BsModalService, private api:ApiService) {
   this.formData = new FormData();
   this.sucessResponse = false;

  }
  ngOnInit(){

  }

  fileChange(event) {
    if(event.target.files.length > 0) {
      this.uploadedFile = <File>event.target.files[0];
    }
    else
      this.uploadedFile = event.target.files;
      this.error = false;
    
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  closeModal()
  {
    this.modalRef.hide();
  }
  onSubmit(f){
   
    
   if(!this.checkForm()){
     console.log('error')
     this.showError();
   }
   else{

    
    this.formData.append("title", this.pin.title);
    this.formData.append("content", this.pin.content);
    this.formData.append("file", this.uploadedFile, this.uploadedFile.name);
    this.loading = true;
    this.loadingMessage ="Your pin is being created, hold tight";
    this.api.createPin(this.formData).subscribe(res=>{
      if('message' in res)
      {
        this.successMessage = "New pin has been created";
        this.sucessResponse = true;
        this.loading =false;
        setTimeout(()=>{
          this.sucessResponse = false;
          this.closeModal();
        },1000);
      }
    })
     
      this.formData = new FormData();
      this.pin.content = "";
      this.pin.title = "";
      this.uploadedFile = undefined;
   }
  }

  showError(){
    console.log('showung')
    this.error=true;
    setTimeout(()=>{
      this.error = false;
    },2000)
  }
  checkForm()
  {
    console.log(this.pin.title, this.pin.content , this.uploadedFile)
    if(this.pin.title === "" )
    {
      this.errorMessage= "title is not filled";
      return false;
    }
    if(this.pin.content ==="" )
    {
      this.errorMessage= "content is not filled";
      return false;
    }
    if(this.uploadedFile === undefined)
    {
      this.errorMessage= "image is not attached";
      return false;
    }
    return true;
  }
}
