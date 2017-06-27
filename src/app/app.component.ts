import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  text:string;
  dbConection:FirebaseObjectObservable<any>;
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth,public db: AngularFireDatabase) {
    this.user = afAuth.authState;
    this.user.subscribe(
      res =>{
        this.dbConection = db.object('/' + res.uid)
      },
      error=>{
        console.log('error dayo')
      }
    );
  }
  login() {
   this.afAuth.auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
    location.reload();
  }
  save() {
    this.dbConection.set({ text: this.text });
    console.log(this.text);
  }
  copyText(ev){
    this.text = ev.target.value;
  }

}
