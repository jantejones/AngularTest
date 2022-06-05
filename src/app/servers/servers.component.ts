import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 
  constructor() { 
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);
  }

  ngOnInit() {
  }

  allowNewServer = false;
  serverCreationStatus = "No server created";
  serverName = "Test Server";
  serverCreated = false;
  servers:string[] = ['Testserver', 'Testserver 2'];

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}