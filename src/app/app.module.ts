import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC2ydKNyHrTQD6Pk1k7Nf3CDtM4NgW7kxA",
    authDomain: "test-app-5eaf5.firebaseapp.com",
    databaseURL: "https://test-app-5eaf5.firebaseio.com",
    projectId: "test-app-5eaf5",
    storageBucket: "test-app-5eaf5.appspot.com",
    messagingSenderId: "106702471527"
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
