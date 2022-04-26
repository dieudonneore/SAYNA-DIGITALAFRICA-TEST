import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproposSpidermanComponent } from './apropos-spiderman.component';

describe('AproposSpidermanComponent', () => {
  let component: AproposSpidermanComponent;
  let fixture: ComponentFixture<AproposSpidermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AproposSpidermanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AproposSpidermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
