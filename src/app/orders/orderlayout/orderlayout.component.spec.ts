import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlayoutComponent } from './orderlayout.component';

describe('OrderlayoutComponent', () => {
  let component: OrderlayoutComponent;
  let fixture: ComponentFixture<OrderlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
