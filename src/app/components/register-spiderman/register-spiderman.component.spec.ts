import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSpidermanComponent } from './register-spiderman.component';

describe('RegisterSpidermanComponent', () => {
  let component: RegisterSpidermanComponent;
  let fixture: ComponentFixture<RegisterSpidermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSpidermanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSpidermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
