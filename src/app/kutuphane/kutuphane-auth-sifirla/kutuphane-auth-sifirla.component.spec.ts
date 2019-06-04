import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KutuphaneAuthSifirlaComponent } from './kutuphane-auth-sifirla.component';

describe('KutuphaneAuthSifirlaComponent', () => {
  let component: KutuphaneAuthSifirlaComponent;
  let fixture: ComponentFixture<KutuphaneAuthSifirlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KutuphaneAuthSifirlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KutuphaneAuthSifirlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
