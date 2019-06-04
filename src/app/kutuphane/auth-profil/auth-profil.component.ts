import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-auth-profil',
  templateUrl: './auth-profil.component.html',
  styleUrls: ['./auth-profil.component.scss']
})
export class AuthProfilComponent implements OnInit {

  email;
  constructor(private as: AuthService) {
    this.email = as.user.email;
   }

  ngOnInit() {
  }

  sifirla() {
    this.as.sifreSifirla(this.email);
  }
}
