import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEntiteCreateComponent } from './budget-entite-create.component';

describe('BudgetEntiteCreateComponent', () => {
  let component: BudgetEntiteCreateComponent;
  let fixture: ComponentFixture<BudgetEntiteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetEntiteCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetEntiteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
