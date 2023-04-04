import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelAchatProduitListComponent } from './appel-achat-produit-list.component';

describe('AppelAchatProduitListComponent', () => {
  let component: AppelAchatProduitListComponent;
  let fixture: ComponentFixture<AppelAchatProduitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppelAchatProduitListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppelAchatProduitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
