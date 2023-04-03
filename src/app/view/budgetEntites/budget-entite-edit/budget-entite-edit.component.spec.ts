import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEntiteEditComponent } from './budget-entite-edit.component';

describe('BudgetEntiteEditComponent', () => {
  let component: BudgetEntiteEditComponent;
  let fixture: ComponentFixture<BudgetEntiteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetEntiteEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetEntiteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
