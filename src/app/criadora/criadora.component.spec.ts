import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriadoraComponent } from './criadora.component';

describe('CriadoraComponent', () => {
  let component: CriadoraComponent;
  let fixture: ComponentFixture<CriadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
