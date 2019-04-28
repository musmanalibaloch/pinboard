import { ChangeDetectorRef, Component, TemplateRef ,OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { combineLatest, Subscription } from 'rxjs';
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
  fileChange(element) {
      this.uploadedFile = element.target.files;
      this.error = false;
  }

  upload() {
      let formData = new FormData();
   
          this.formData.append("uploads[]", this.uploadedFile, this.uploadedFile.name);
      
      
  }
  
  constructor(private modalService: BsModalService) {
   
  }
  ngOnInit(){

  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onSubmit(){
   
    
   if(!this.checkForm()){
     console.log('error')
     this.showError();
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
    if(this.pin.title === "" || this.pin.content ==="" || this.uploadedFile === undefined)
    {
      return false;
    }
    return true;
  }
}
