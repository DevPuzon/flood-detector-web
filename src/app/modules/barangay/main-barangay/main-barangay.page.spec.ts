import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainBarangayPage } from './main-barangay.page';

describe('MainBarangayPage', () => {
  let component: MainBarangayPage;
  let fixture: ComponentFixture<MainBarangayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBarangayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainBarangayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
