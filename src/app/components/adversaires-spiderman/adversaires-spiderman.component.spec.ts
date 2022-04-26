import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdversairesSpidermanComponent } from './adversaires-spiderman.component';

describe('AdversairesSpidermanComponent', () => {
  let component: AdversairesSpidermanComponent;
  let fixture: ComponentFixture<AdversairesSpidermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdversairesSpidermanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdversairesSpidermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
