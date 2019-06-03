import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KutuphaneCreateComponent } from './kutuphane-create.component';

describe('KutuphaneCreateComponent', () => {
  let component: KutuphaneCreateComponent;
  let fixture: ComponentFixture<KutuphaneCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KutuphaneCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KutuphaneCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
