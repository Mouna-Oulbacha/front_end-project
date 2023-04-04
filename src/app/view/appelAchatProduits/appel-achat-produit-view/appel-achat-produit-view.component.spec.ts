import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelAchatProduitViewComponent } from './appel-achat-produit-view.component';

describe('AppelAchatProduitViewComponent', () => {
  let component: AppelAchatProduitViewComponent;
  let fixture: ComponentFixture<AppelAchatProduitViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppelAchatProduitViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppelAchatProduitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
