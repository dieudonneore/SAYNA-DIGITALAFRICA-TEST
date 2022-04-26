import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosSpidermanComponent } from './heros-spiderman.component';

describe('HerosSpidermanComponent', () => {
  let component: HerosSpidermanComponent;
  let fixture: ComponentFixture<HerosSpidermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerosSpidermanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosSpidermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
