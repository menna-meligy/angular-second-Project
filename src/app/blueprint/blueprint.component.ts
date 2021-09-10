import { Component, ElementRef, OnInit , ViewChild , AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-blueprint',
  templateUrl: './blueprint.component.html',
  styleUrls: ['./blueprint.component.css']
})
export class BlueprintComponent implements OnInit , AfterViewInit {
serverName=""
serverContent="";
// @ViewChild('serverContent')serverContentProp = " ";
  constructor() {
  }

  ngOnInit(): void {
    console.log("text content is "+this.serverName);
    // here ngonInit cannot read the viewchild data passing because it is run just after the constructor which the data hasn't been rendered yet
  }

  onAddServer(serverName:HTMLInputElement){
this.serverName=serverName.value;
  }

  onAddContent(serverContent: HTMLInputElement) {
this.serverContent=serverContent.value;

  }
  ngAfterViewInit(){
    console.log(this.serverName);
    //here afterviewInit can read the text inside the viewchild
  }

}
