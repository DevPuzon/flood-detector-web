import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardBarangayPage } from './dashboard-barangay.page';

describe('DashboardBarangayPage', () => {
  let component: DashboardBarangayPage;
  let fixture: ComponentFixture<DashboardBarangayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBarangayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardBarangayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
