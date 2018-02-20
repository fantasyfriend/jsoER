import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OefhooglaagComponent } from './oefhooglaag.component';

describe('OefhooglaagComponent', () => {
  let component: OefhooglaagComponent;
  let fixture: ComponentFixture<OefhooglaagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OefhooglaagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OefhooglaagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
