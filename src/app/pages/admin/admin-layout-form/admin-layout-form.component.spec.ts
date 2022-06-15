import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutFormComponent } from './admin-layout-form.component';

describe('AdminLayoutFormComponent', () => {
  let component: AdminLayoutFormComponent;
  let fixture: ComponentFixture<AdminLayoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLayoutFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLayoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
