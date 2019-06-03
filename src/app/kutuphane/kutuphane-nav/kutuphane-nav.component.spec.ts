import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KutuphaneNavComponent } from './kutuphane-nav.component';

describe('KutuphaneNavComponent', () => {
  let component: KutuphaneNavComponent;
  let fixture: ComponentFixture<KutuphaneNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KutuphaneNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KutuphaneNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
