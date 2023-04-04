import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieAppelAchatCreateComponent } from './categorie-appel-achat-create.component';

describe('CategorieAppelAchatCreateComponent', () => {
  let component: CategorieAppelAchatCreateComponent;
  let fixture: ComponentFixture<CategorieAppelAchatCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieAppelAchatCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieAppelAchatCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
