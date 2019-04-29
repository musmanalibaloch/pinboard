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
          alert("No more pins to load");
        }
        else if(this.pins.length > 0)
        {
          if(res['pins']['length'] > 10)
          {
            this.pins = this.pins.concat(res['pins']);
            console.log(this.pins);
            this.currentPage = this.currentPage +1;
          }
          else
          {
            this.pins = res['pins'];
            if(res['pins']['length'] === this.pins.lenght)
            {
              alert("No new pins to load");
            }
            
          }
        }
        else
        this.pins = res['pins'];
      }
    })
  }

  loadMorePins(){
    
    this.getPinsByPage(this.currentPage);
  }

}
