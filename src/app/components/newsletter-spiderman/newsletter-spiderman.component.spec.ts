import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterSpidermanComponent } from './newsletter-spiderman.component';

describe('NewsletterSpidermanComponent', () => {
  let component: NewsletterSpidermanComponent;
  let fixture: ComponentFixture<NewsletterSpidermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterSpidermanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterSpidermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
