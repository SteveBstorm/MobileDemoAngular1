import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo2listeComponent } from './exo2liste.component';

describe('Exo2listeComponent', () => {
  let component: Exo2listeComponent;
  let fixture: ComponentFixture<Exo2listeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo2listeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo2listeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
