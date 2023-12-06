import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { provideAuth, getAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LabsComponent } from './pages/labs/labs.component';
import { HeaderComponent } from './commons/header/header.component';

const config = {
  apiKey: "AIzaSyC9mHN80JOLtVfvyzeq5JRJaVvWxkzN6cI",
  authDomain: "apis-3eb9a.firebaseapp.com",
  databaseURL: "https://apis-3eb9a-default-rtdb.firebaseio.com",
  projectId: "apis-3eb9a",
  storageBucket: "apis-3eb9a.appspot.com",
  messagingSenderId: "438677745375",
  appId: "1:438677745375:web:abe04cd017d3783998c36a",
  measurementId: "G-55NYTGR08E"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LabsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(config)),
    provideAuth(() => getAuth()),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
