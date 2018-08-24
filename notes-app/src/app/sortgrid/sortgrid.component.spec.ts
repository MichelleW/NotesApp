import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortgridComponent } from './sortgrid.component';

describe('SortgridComponent', () => {
  let component: SortgridComponent;
  let fixture: ComponentFixture<SortgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
