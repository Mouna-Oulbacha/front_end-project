import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelAchatProduitEditComponent } from './appel-achat-produit-edit.component';

describe('AppelAchatProduitEditComponent', () => {
  let component: AppelAchatProduitEditComponent;
  let fixture: ComponentFixture<AppelAchatProduitEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppelAchatProduitEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppelAchatProduitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
