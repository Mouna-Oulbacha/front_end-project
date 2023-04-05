import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieProduitViewComponent } from './categorie-produit-view.component';

describe('CategorieProduitViewComponent', () => {
  let component: CategorieProduitViewComponent;
  let fixture: ComponentFixture<CategorieProduitViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieProduitViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieProduitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
