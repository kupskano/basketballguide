import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayerpositionPage } from './playerposition.page';

describe('PlayerpositionPage', () => {
  let component: PlayerpositionPage;
  let fixture: ComponentFixture<PlayerpositionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerpositionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerpositionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
