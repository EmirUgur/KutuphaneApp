import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KutuphaneCreateComponent } from './kutuphane/kutuphane-create/kutuphane-create.component';
import { KutuphaneMainComponent } from './kutuphane/kutuphane-main/kutuphane-main.component';
import { KutuphaneAuthComponent } from './kutuphane/kutuphane-auth/kutuphane-auth.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './kutuphane/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { KutuphaneNavComponent } from './kutuphane/kutuphane-nav/kutuphane-nav.component';
import { AuthProfilComponent } from './kutuphane/auth-profil/auth-profil.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

const Routes = [
  { path: 'auth',  component: KutuphaneAuthComponent },
  { path: 'profil', component: AuthProfilComponent },
  { path: '', component: KutuphaneMainComponent }
];

const firebaseConfig = {
  apiKey: 'AIzaSyDHOEdyX0lY_1r-DRUtprrPXT-k0-m5_KA',
  authDomain: 'kutuphaneapp-4d625.firebaseapp.com',
  databaseURL: 'https://kutuphaneapp-4d625.firebaseio.com',
  projectId: 'kutuphaneapp-4d625',
  storageBucket: 'kutuphaneapp-4d625.appspot.com',
  messagingSenderId: '643535169038',
  appId: '1:643535169038:web:e626e95ff24f448b'
};

@NgModule({
  declarations: [
    AppComponent,
    KutuphaneCreateComponent,
    KutuphaneMainComponent,
    KutuphaneAuthComponent,
    KutuphaneNavComponent,
    AuthProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faEnvelope, faKey, faTrash, faEdit);
  }
}
