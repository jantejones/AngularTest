import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { UsernameComponent } from './username/username.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ServersComponent, ServerComponent, UsernameComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
