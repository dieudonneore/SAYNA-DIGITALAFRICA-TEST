import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSpidermanComponent } from './header-spiderman.component';

describe('HeaderSpidermanComponent', () => {
  let component: HeaderSpidermanComponent;
  let fixture: ComponentFixture<HeaderSpidermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSpidermanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSpidermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
