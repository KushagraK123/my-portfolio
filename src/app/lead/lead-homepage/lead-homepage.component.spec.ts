import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadHomepageComponent } from './lead-homepage.component';

describe('LeadHomepageComponent', () => {
  let component: LeadHomepageComponent;
  let fixture: ComponentFixture<LeadHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
