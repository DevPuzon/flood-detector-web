import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoryBarangayPage } from './history-barangay.page';

describe('HistoryBarangayPage', () => {
  let component: HistoryBarangayPage;
  let fixture: ComponentFixture<HistoryBarangayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryBarangayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryBarangayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
