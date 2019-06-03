import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Kitap } from './../kitap/kitap';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private fs: AngularFirestore, private toastr: ToastrService) { }

  kitapEkle(ekleAd, ekleYazar, ekleTarih, ekleSayfa) {
    this.fs.collection('kitaplar').add({ad: ekleAd, yazar: ekleYazar, tarih: ekleTarih, sayfa: ekleSayfa});
    this.toastr.success('Yeni kitap eklendi: ' + ekleAd);
  }

  getKitap() {
    return this.fs.collection('kitaplar').snapshotChanges();
  }

  kitapDuzenle(kitap: Kitap, duzenleAd, duzenleYazar, duzenleTarih, duzenleSayfa) {
      this.fs.doc('kitaplar/' + kitap.id).update({ad: duzenleAd, yazar: duzenleYazar, tarih: duzenleTarih, sayfa: duzenleSayfa});
      this.toastr.success(kitap.ad + ' adlı kitap düzenlendi.');
  }

  kitapSil(kitap: Kitap) {
    this.fs.doc('kitaplar/' + kitap.id).delete();
    this.toastr.success(kitap.ad + ' adlı kitap silindi.');
  }
}
