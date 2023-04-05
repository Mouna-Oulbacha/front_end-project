import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionBesoinProduitListComponent } from './expression-besoin-produit-list.component';

describe('ExpressionBesoinProduitListComponent', () => {
  let component: ExpressionBesoinProduitListComponent;
  let fixture: ComponentFixture<ExpressionBesoinProduitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressionBesoinProduitListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressionBesoinProduitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
