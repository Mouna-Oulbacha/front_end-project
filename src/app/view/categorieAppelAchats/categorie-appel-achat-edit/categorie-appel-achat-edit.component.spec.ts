import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieAppelAchatEditComponent } from './categorie-appel-achat-edit.component';

describe('CategorieAppelAchatEditComponent', () => {
  let component: CategorieAppelAchatEditComponent;
  let fixture: ComponentFixture<CategorieAppelAchatEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieAppelAchatEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieAppelAchatEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
