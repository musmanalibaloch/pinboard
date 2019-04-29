import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.css']
})
export class PinsComponent implements OnInit {
  pins:any;
  currentPage:number;
  constructor(private api: ApiService) { 
    this.currentPage = 0;
    this.pins = [];
  }

  ngOnInit() {
    this.getPinsByPage();
  }

  getPinsByPage(page=0)
  {
    this.api.getAllPins(page).subscribe(res=>{
      if('pins' in res)
      {
        if(res['pins']['length'] ===0 )
        {
          this.currentPage = this.currentPage - 1;
          alert("No more pins to load");
        }
        else if(this.pins.length > 0)
        {

          
          this.pins = this.pins.concat(res['pins']);
          console.log(this.pins);
        }
        else
        this.pins = res['pins'];
      }
    })
  }

  loadMorePins(){
    this.currentPage = this.currentPage +1;
    this.getPinsByPage(this.currentPage);
  }

}
