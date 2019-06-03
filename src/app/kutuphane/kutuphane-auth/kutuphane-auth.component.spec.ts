import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KutuphaneAuthComponent } from './kutuphane-auth.component';

describe('KutuphaneAuthComponent', () => {
  let component: KutuphaneAuthComponent;
  let fixture: ComponentFixture<KutuphaneAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KutuphaneAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KutuphaneAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
