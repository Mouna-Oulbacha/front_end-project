import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionBesoinProduitViewComponent } from './expression-besoin-produit-view.component';

describe('ExpressionBesoinProduitViewComponent', () => {
  let component: ExpressionBesoinProduitViewComponent;
  let fixture: ComponentFixture<ExpressionBesoinProduitViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressionBesoinProduitViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressionBesoinProduitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
