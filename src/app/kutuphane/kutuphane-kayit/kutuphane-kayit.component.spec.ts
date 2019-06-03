import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KutuphaneKayitComponent } from './kutuphane-kayit.component';

describe('KutuphaneKayitComponent', () => {
  let component: KutuphaneKayitComponent;
  let fixture: ComponentFixture<KutuphaneKayitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KutuphaneKayitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KutuphaneKayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
