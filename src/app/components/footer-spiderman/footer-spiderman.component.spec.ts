import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSpidermanComponent } from './footer-spiderman.component';

describe('FooterSpidermanComponent', () => {
  let component: FooterSpidermanComponent;
  let fixture: ComponentFixture<FooterSpidermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSpidermanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSpidermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
