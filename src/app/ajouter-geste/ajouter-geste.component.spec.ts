import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterGesteComponent } from './ajouter-geste.component';

describe('AjouterGesteComponent', () => {
  let component: AjouterGesteComponent;
  let fixture: ComponentFixture<AjouterGesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterGesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterGesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
