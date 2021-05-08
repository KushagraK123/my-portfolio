import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillHomepageComponent } from './skill-homepage.component';

describe('SkillHomepageComponent', () => {
  let component: SkillHomepageComponent;
  let fixture: ComponentFixture<SkillHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
