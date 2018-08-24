import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByPipeComponent } from './order-by-pipe.component';

describe('OrderByPipeComponent', () => {
  let component: OrderByPipeComponent;
  let fixture: ComponentFixture<OrderByPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderByPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
