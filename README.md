Angular2のインストールは割愛

とりあえず
https://github.com/angular/angularfire2/blob/master/docs/1-install-and-setup.md
これ見ればだいたい分かる。

#AngularFire2のインストール

ng newしたプロジェクトフォルダに移動後以下のコマンドを実行する。

```
npm install firebase angularfire2 --save
```

#FireBaseの情報

ngModuleにfirebaseの情報を書き込む

```
export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
```

まあconfigの中身をコピーすればだいたい大丈夫。  
importするために以下を適切ば場所に書く。

```
import { AngularFireModule } from 'angularfire2';

imports: [
  BrowserModule,
  AngularFireModule.initializeApp(environment.firebase)
],
```
