import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAcountsComponent } from './all-acounts.component';

describe('AllAcountsComponent', () => {
  let component: AllAcountsComponent;
  let fixture: ComponentFixture<AllAcountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAcountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAcountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
