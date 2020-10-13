import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalchoosePage } from './modalchoose.page';

describe('ModalchoosePage', () => {
  let component: ModalchoosePage;
  let fixture: ComponentFixture<ModalchoosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalchoosePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalchoosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
