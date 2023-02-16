import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaleComponent } from './signale.component';

describe('SignaleComponent', () => {
  let component: SignaleComponent;
  let fixture: ComponentFixture<SignaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
