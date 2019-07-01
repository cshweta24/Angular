import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

alTx=`This is codekul,Angular`
typ='button'
btn='submit'
brd='1px solid red'
alAttr='alert'
  constructor() { }

  ngOnInit() {
    this.magicColor()
  }

  magicColor(){
    this.brd='dynamic color'
  }

  myClick(ev:any)
  {
    console.log(ev)
  }
  onEnter(ev:any)
  {
    console.log(ev.target.value)
    if(ev.key=='Enter')
    ev.target.value=ev.target.value*ev.target.value
  }
}
