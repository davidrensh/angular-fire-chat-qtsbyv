import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { ChatComponent } from './components/chat/chat.component';
import { ChatService } from './providers/chat.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  imports:      [ BrowserModule,FormsModule,AngularFireModule.initializeApp(environment.firebase),  AngularFirestoreModule, AngularFireAuthModule],
  declarations: [ AppComponent, ChatComponent, LoginComponent ],
  providers: [ChatService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
