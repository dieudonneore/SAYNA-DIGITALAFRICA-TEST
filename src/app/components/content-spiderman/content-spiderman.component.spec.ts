import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSpidermanComponent } from './content-spiderman.component';

describe('ContentSpidermanComponent', () => {
  let component: ContentSpidermanComponent;
  let fixture: ComponentFixture<ContentSpidermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSpidermanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSpidermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
