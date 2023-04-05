import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieProduitEditComponent } from './categorie-produit-edit.component';

describe('CategorieProduitEditComponent', () => {
  let component: CategorieProduitEditComponent;
  let fixture: ComponentFixture<CategorieProduitEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieProduitEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieProduitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
