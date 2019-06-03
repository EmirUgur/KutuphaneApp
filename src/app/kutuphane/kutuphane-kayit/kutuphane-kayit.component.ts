import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-kutuphane-kayit',
  templateUrl: './kutuphane-kayit.component.html',
  styleUrls: ['./kutuphane-kayit.component.scss']
})
export class KutuphaneKayitComponent implements OnInit {

  eposta: string;
  sifre: string;
  constructor(private as: AuthService, private router: Router) { }

  ngOnInit() {
  }

  girisRedirect() {
    this.router.navigate(['auth']);
  }

  kayitOl() {
    this.as.kayitOl(this.eposta, this.sifre);
  }
}
