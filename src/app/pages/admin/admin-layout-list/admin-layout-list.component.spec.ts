import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutListComponent } from './admin-layout-list.component';

describe('AdminLayoutListComponent', () => {
  let component: AdminLayoutListComponent;
  let fixture: ComponentFixture<AdminLayoutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLayoutListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLayoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
