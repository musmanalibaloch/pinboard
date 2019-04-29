import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../api.service";
@Component({
  selector: 'app-pin-detail',
  templateUrl: './pin-detail.component.html',
  styleUrls: ['./pin-detail.component.css']
})
export class PinDetailComponent implements OnInit {
  pinId:number;
  pin:any;
  comment:string;
  constructor(private route: ActivatedRoute,private api:ApiService) {}

  ngOnInit() {
     this.route.params.subscribe(params => {
       this.pinId = +params['id']; // (+) converts string 'id' to a number
      console.log(this.pinId);
      this.getPinDetail(this.pinId);
    });
  }
  getPinDetail(pinId)
  { 
    this.api.getPinDetail(pinId).
    subscribe(data=>{
      if(data){
      console.log(data,'<<<<');
      this.pin=data[0];
      }
      else
      {
        console.log("pin does not exists");
      }
    })
  }
  makeComment()
  {
    if(this.comment === "")
    {
      alert('cannot make empty comment');
      return;
    }
    this.api.makeComment(this.pinId,this.comment)
    .subscribe(res=>{
      console.log(res);
      if('message' in res)
      {
        this.pin.Comments.push({comment:this.comment});
        this.comment="";
      }
      else
      {
        console.log("failed to make comment");
      }
    })
  }

}
