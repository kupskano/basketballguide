import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PointsystemPage } from './pointsystem.page';

describe('PointsystemPage', () => {
  let component: PointsystemPage;
  let fixture: ComponentFixture<PointsystemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsystemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PointsystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
