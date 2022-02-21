import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
// import { FirstToDoComponent} from './first-to-do/first-to-do.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild(FirstToDoComponent) dataFirstToApp : any;

// @Output() sendData = new EventEmitter()

item:any=[];
reciveDataFromChild(event :any){
  this.item.push(event)
}




  // ngAfterViewInit(){
  //   Promise.resolve().then(()=>this.dataFirstToApp.item)
  // }

  ngOnInit(){
    // return this.dataFirstToApp.item
  }

  title = 'ToDo';
}
