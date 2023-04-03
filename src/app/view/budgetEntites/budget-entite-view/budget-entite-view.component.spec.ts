import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEntiteViewComponent } from './budget-entite-view.component';

describe('BudgetEntiteViewComponent', () => {
  let component: BudgetEntiteViewComponent;
  let fixture: ComponentFixture<BudgetEntiteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetEntiteViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetEntiteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
