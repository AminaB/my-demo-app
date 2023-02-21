import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer=false;
  serverCreationStatus="no server created";
  serverId=10;
  constructor(){
    setTimeout(()=>this.allowNewServer=true,2000)
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onServercreate(){
     this.serverCreationStatus="you create a server";
  }

}
