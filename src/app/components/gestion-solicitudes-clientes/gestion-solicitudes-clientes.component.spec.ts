import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSolicitudesClientesComponent } from './gestion-solicitudes-clientes.component';

describe('GestionSolicitudesClientesComponent', () => {
  let component: GestionSolicitudesClientesComponent;
  let fixture: ComponentFixture<GestionSolicitudesClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionSolicitudesClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionSolicitudesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
