import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceHomepageComponent } from './experience-homepage.component';

describe('ExperienceHomepageComponent', () => {
  let component: ExperienceHomepageComponent;
  let fixture: ComponentFixture<ExperienceHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
