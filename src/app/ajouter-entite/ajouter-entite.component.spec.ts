import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEntiteComponent } from './ajouter-entite.component';

describe('AjouterEntiteComponent', () => {
  let component: AjouterEntiteComponent;
  let fixture: ComponentFixture<AjouterEntiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEntiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterEntiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
