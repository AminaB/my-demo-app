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
  serverName='';
  constructor(){
    setTimeout(()=>this.allowNewServer=true,2000)
  }
  ngOnInit(): void {
  }
  onServercreate(){
     this.serverCreationStatus="you create a server";
  }
  onUpdateServerName(event: any){
    this.serverName=event.target.value;
  }
}
