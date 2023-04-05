import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieProduitListComponent } from './categorie-produit-list.component';

describe('CategorieProduitListComponent', () => {
  let component: CategorieProduitListComponent;
  let fixture: ComponentFixture<CategorieProduitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieProduitListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieProduitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
