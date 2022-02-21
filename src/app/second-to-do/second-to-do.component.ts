import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-to-do',
  templateUrl: './second-to-do.component.html',
  styleUrls: ['./second-to-do.component.css']
})
export class SecondToDoComponent implements OnInit {
@Input() parentData : any;
button : boolean = false;
complete(i : any){
  // for(let task of this.parentData){
  //   task = "finsh"
  // }
  var task = document.getElementsByClassName("task")[i];
if(!this.button){
  task.classList.add("text-decoration-line-through")
  this.button = true
  return
}
  task.classList.remove("text-decoration-line-through")
  this.button = false
}
delete(i:number){
  this.parentData.splice(i,1)
}
// var btn1 = document.getElementById("btn1");
// var btn2 = document.getElementById("btn1");
//  btn1.addEventListener("click",()=>{

//  })

  constructor() { }

  ngOnInit(): void {
  }

}

