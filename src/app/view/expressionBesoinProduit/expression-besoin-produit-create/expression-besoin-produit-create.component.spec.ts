import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionBesoinProduitCreateComponent } from './expression-besoin-produit-create.component';

describe('ExpressionBesoinProduitCreateComponent', () => {
  let component: ExpressionBesoinProduitCreateComponent;
  let fixture: ComponentFixture<ExpressionBesoinProduitCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressionBesoinProduitCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressionBesoinProduitCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
