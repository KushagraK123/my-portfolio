import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioAdminComponent } from './bio-admin.component';

describe('BioAdminComponent', () => {
  let component: BioAdminComponent;
  let fixture: ComponentFixture<BioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
