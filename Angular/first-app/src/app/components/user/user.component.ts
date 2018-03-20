import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  address:Address;
  hobbies:string[];

  constructor() {
    console.log('constuctor ran...')
   }

  ngOnInit() {
    console.log('ngONinit ran...')
    this.name = 'John Doe'
    this.age = 69
    this.address = {
      street: 'st andrews',
      city: 'north van',
      province: 'bc'
    }
    this.hobbies = ['code','game','fap']
  }

  onClick() {
    console.log('hello')
    this.hobbies.push('new shit')
  }

  addHobby(hobby) {
    console.log(hobby)
    this.hobbies.unshift(hobby)
    return false
  }
  deleteHobby(hobby) {
    console.log(hobby)
    for(let i = 0;i < this.hobbies.length;i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i,1)
      }
    }
  }
}
interface Address {
  street:string,
  city:string,
  province:string
}
