import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionBesoinProduitEditComponent } from './expression-besoin-produit-edit.component';

describe('ExpressionBesoinProduitEditComponent', () => {
  let component: ExpressionBesoinProduitEditComponent;
  let fixture: ComponentFixture<ExpressionBesoinProduitEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressionBesoinProduitEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressionBesoinProduitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
