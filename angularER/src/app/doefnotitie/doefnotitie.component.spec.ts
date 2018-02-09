import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoefnotitieComponent } from './doefnotitie.component';

describe('DoefnotitieComponent', () => {
  let component: DoefnotitieComponent;
  let fixture: ComponentFixture<DoefnotitieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoefnotitieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoefnotitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
