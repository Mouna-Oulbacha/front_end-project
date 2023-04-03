import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEntiteListComponent } from './budget-entite-list.component';

describe('BudgetEntiteListComponent', () => {
  let component: BudgetEntiteListComponent;
  let fixture: ComponentFixture<BudgetEntiteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetEntiteListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetEntiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
