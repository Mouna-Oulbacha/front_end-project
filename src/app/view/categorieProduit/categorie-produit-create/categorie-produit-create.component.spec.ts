import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieProduitCreateComponent } from './categorie-produit-create.component';

describe('CategorieProduitCreateComponent', () => {
  let component: CategorieProduitCreateComponent;
  let fixture: ComponentFixture<CategorieProduitCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieProduitCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieProduitCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
