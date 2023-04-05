import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionBesoinEditComponent } from './expression-besoin-edit.component';

describe('ExpressionBesoinEditComponent', () => {
  let component: ExpressionBesoinEditComponent;
  let fixture: ComponentFixture<ExpressionBesoinEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressionBesoinEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressionBesoinEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
