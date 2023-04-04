import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieAppelAchatListComponent } from './categorie-appel-achat-list.component';

describe('CategorieAppelAchatListComponent', () => {
  let component: CategorieAppelAchatListComponent;
  let fixture: ComponentFixture<CategorieAppelAchatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieAppelAchatListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieAppelAchatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
