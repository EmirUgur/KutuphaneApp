import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kutuphane-auth-sifirla',
  templateUrl: './kutuphane-auth-sifirla.component.html',
  styleUrls: ['./kutuphane-auth-sifirla.component.scss']
})
export class KutuphaneAuthSifirlaComponent implements OnInit {

  eposta: string;
  constructor(private as: AuthService, private route: Router) { }

  ngOnInit() {
  }

  sifirla() {
    this.as.sifreSifirla(this.eposta);
  }
  geri() {
    this.route.navigate(['auth']);
  }
}
