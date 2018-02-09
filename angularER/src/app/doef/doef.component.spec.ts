import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoefComponent } from './doef.component';

describe('DoefComponent', () => {
  let component: DoefComponent;
  let fixture: ComponentFixture<DoefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
