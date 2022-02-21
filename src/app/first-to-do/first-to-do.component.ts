import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'app-first-to-do',
  templateUrl: './first-to-do.component.html',
  styleUrls: ['./first-to-do.component.css']
})
export class FirstToDoComponent implements OnInit {

  item : string = "";

@Output() childData = new EventEmitter()

sendData(taskName:string){
this.childData.emit(taskName);
}

  constructor() { }

  ngOnInit(): void {
  }

}
