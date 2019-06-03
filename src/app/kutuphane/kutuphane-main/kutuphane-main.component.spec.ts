import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KutuphaneMainComponent } from './kutuphane-main.component';

describe('KutuphaneMainComponent', () => {
  let component: KutuphaneMainComponent;
  let fixture: ComponentFixture<KutuphaneMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KutuphaneMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KutuphaneMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
