import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementHomepageComponent } from './achievement-homepage.component';

describe('AchievementHomepageComponent', () => {
  let component: AchievementHomepageComponent;
  let fixture: ComponentFixture<AchievementHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
