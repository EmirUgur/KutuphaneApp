import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore/firestore.service';

@Component({
  selector: 'app-kutuphane-create',
  templateUrl: './kutuphane-create.component.html',
  styleUrls: ['./kutuphane-create.component.scss']
})
export class KutuphaneCreateComponent implements OnInit {

  constructor(public fs: FirestoreService) { }
  ad;
  yazar;
  tarih;
  sayfa;

  ngOnInit() {
  }

}
