import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  std:Student[] = [
    {
      name:"Raja",age:20,email:"raja07@gmail.com"
    },
    {
      name:"ramesh",age:25,email:"ramesh100@gmail.com"
    }
  ]

  constructor() { }
   
  sendData(){
    return this.std
   }
   
  }


class Student
{
  name:string;
  age:number;
  email:string;
}


