import { Component } from '@angular/core';
import { MyserviceService} from './myservice.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  
  res:any;
  constructor (private myser: MyserviceService){

  }
  receivedata(){
    this.res = this.myser.sendData();
    console.log(this.res)
  }
}
