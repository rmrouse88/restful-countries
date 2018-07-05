import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrisDisplayComponent } from './iris-display.component';

describe('IrisDisplayComponent', () => {
  let component: IrisDisplayComponent;
  let fixture: ComponentFixture<IrisDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrisDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrisDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
