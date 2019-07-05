import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {


  // bntStyle: string;
  // DataComponent() {

  //  this. bntStyle = 'btn-default';
  // }
  // submit() {
  //   this.bntStyle = 'btn-change';

  // }

  // ngStyle='hello'

  // DataComponent()
  // {
  //   this.ngStyle
  // }

//   toggle = true;
// status = 'Yes'; 

// enableDisableRule(job) {
//     this.toggle = !this.toggle;
//     this.status = this.toggle ? 'Yes' : 'No';
// }
  constructor() { }

  ngOnInit() {
  }

  // value='welcome angular'


  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
    }


    sub(){
      alert("hello");
    }

  
}
