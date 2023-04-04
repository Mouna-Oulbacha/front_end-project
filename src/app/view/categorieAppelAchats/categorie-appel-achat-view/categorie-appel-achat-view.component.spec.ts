import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieAppelAchatViewComponent } from './categorie-appel-achat-view.component';

describe('CategorieAppelAchatViewComponent', () => {
  let component: CategorieAppelAchatViewComponent;
  let fixture: ComponentFixture<CategorieAppelAchatViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieAppelAchatViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieAppelAchatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
