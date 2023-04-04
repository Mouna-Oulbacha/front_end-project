import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelAchatProduitCreateComponent } from './appel-achat-produit-create.component';

describe('AppelAchatProduitCreateComponent', () => {
  let component: AppelAchatProduitCreateComponent;
  let fixture: ComponentFixture<AppelAchatProduitCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppelAchatProduitCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppelAchatProduitCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
