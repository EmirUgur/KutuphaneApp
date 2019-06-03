import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kutuphane-nav',
  templateUrl: './kutuphane-nav.component.html',
  styleUrls: ['./kutuphane-nav.component.scss']
})
export class KutuphaneNavComponent implements OnInit {

  constructor(private as: AuthService, private router: Router) { }

  ngOnInit() {
  }
  anasayfa() {
    this.router.navigate(['']);
  }
  profil() {
    this.router.navigate(['profil']);
  }
  cikisYap() {
    this.as.cikisYap();
  }
}
