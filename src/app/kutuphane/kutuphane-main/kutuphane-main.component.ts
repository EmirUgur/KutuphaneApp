import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { auth } from 'firebase';
import { Router } from '@angular/router';
import { FirestoreService } from '../firestore/firestore.service';
import { Kitap } from '../kitap/kitap';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-kutuphane-main',
  templateUrl: './kutuphane-main.component.html',
  styleUrls: ['./kutuphane-main.component.scss']
})
export class KutuphaneMainComponent implements OnInit {

  kitaplar: Kitap[];

  editMode = false;
  duzenleAd;
  duzenleYazar;
  duzenleTarih;
  duzenleSayfa;
  duzenlenecekKitap: Kitap;

  constructor(
    public as: AuthService,
    private route: Router,
    private kitapService: FirestoreService,
    private toastr: ToastrService) { }
  ngOnInit() {
    if (!this.as.isActive) {
      this.route.navigate(['auth']);
    }
    this.kitapService.getKitap().subscribe(act => {
      this.kitaplar = act.map(a => {
        const data = a.payload.doc.data() as Kitap;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  cikisYap() {
    this.as.cikisYap();
  }

  duzenle(ad, yazar, tarih, sayfa, kitap: Kitap) {
    this.editMode = true;
    this.duzenleAd = ad;
    this.duzenleYazar = yazar;
    this.duzenleTarih = tarih;
    this.duzenleSayfa = sayfa;
    this.duzenlenecekKitap = kitap;
  }
  kaydet() {
    if (this.duzenleAd === '' || this.duzenleYazar === '' || this.duzenleTarih === '' || this.duzenleSayfa === '') {
      this.toastr.error('Tüm kutuları doldurun!', 'HATA', { timeOut: 1000 });
    } else {
      this.editMode = false;
      this.kitapService.kitapDuzenle(this.duzenlenecekKitap, this.duzenleAd, this.duzenleYazar, this.duzenleTarih, this.duzenleSayfa);
    }
  }
  iptal() {
    this.editMode = false;
  }
}
