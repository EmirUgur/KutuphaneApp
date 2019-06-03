import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { auth } from 'firebase';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kutuphane-auth',
  templateUrl: './kutuphane-auth.component.html',
  styleUrls: ['./kutuphane-auth.component.scss']
})
export class KutuphaneAuthComponent implements OnInit {

  eposta: string;
  sifre: string;

  constructor(public authService: AuthService, private route: Router) { }

  ngOnInit() {
    if (this.authService.isActive) {
      this.route.navigate(['']);
    }
  }

  auth(islem) {
    switch (islem) {
      // giriş yap
      case 0:
      this.authService.girisYap(this.eposta, this.sifre);
      break;

      // kayıt ol
      case 1:
      this.authService.kayitOl(this.eposta, this.sifre);
      break;

      // çıkış yap
      case 2:
      this.authService.cikisYap();
      break;
      default:
        break;
    }
  }

}
