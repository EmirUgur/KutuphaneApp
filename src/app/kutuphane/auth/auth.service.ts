import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: firebase.User;

  constructor(private auth: AngularFireAuth, private router: Router, private toastr: ToastrService) {
    auth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async kayitOl(email: string, sifre: string) {
    try {
      await this.auth.auth.createUserWithEmailAndPassword(email, sifre);
      this.toastr.success('Hesap oluşturuldu. Şimdi giriş yapabilirsiniz.', 'Başarılı');
    } catch (e) {
      this.toastr.error(e.message, 'HATA');
    }
  }
  async girisYap(email: string, sifre: string) {
    try {
      await  this.auth.auth.signInWithEmailAndPassword(email, sifre);
      this.router.navigate(['']);
    } catch (e) {
      this.toastr.error(e.message, 'HATA');
    }
  }
  async cikisYap() {
    await this.auth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['auth']);
  }
  get isActive(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
}
}
