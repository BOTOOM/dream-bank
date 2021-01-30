import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRequestedComponent } from './product-requested.component';

describe('ProductRequestedComponent', () => {
  let component: ProductRequestedComponent;
  let fixture: ComponentFixture<ProductRequestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRequestedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
