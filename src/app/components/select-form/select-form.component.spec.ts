import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFormComponent } from './select-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('SelectFormComponent', () => {
  let component: SelectFormComponent;
  let fixture: ComponentFixture<SelectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        BrowserAnimationsModule,
        MatInputModule,
        MatIconModule,
        MatSlideToggleModule,
        FormsModule
      ],
      declarations: [ SelectFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Detectar si calcular funciona con operador de suma', ()=>{
    component.numero1=12;
    component.numero2=12;

    // Cambiar el booleano, true, accion retorna 24 | false: accion retorna un string vacio
    component.sumar=false;
    const btnEnviar = fixture.debugElement.query(By.css('#btnEnviar'));
    btnEnviar.nativeElement.click();


    expect(component.sumaSum).toEqual("");
  });

  it('Detectar si calcular funciona con operador de multiplicacion', ()=>{
    component.numero1=12;
    component.numero2=12;

  // Cambiar el booleano, true, accion retorna 144 | false: accion retorna un string vacio
    component.multiplicar=true;
    const btnEnviar = fixture.debugElement.query(By.css('#btnEnviar'));
    btnEnviar.nativeElement.click();


    expect(component.multiMult).toEqual(144);
  });

  it('Detectar si calcular funciona con operador de restar', ()=>{
    component.numero1=12;
    component.numero2=12;

  // Cambiar el booleano, true, accion retorna 0 | false: accion retorna un string vacio
    component.restar=true;
    const btnEnviar = fixture.debugElement.query(By.css('#btnEnviar'));
    btnEnviar.nativeElement.click();


    expect(component.restaRes).toEqual(0);
  });

  it('Detectar si calcular funciona con operador de Dividir', ()=>{
    component.numero1=12;
    component.numero2=12;

  // Cambiar el booleano, true, accion retorna 1 | false: accion retorna un string vacio
    component.dividir=true;
    const btnEnviar = fixture.debugElement.query(By.css('#btnEnviar'));
    btnEnviar.nativeElement.click();


    expect(component.divdiDiv).toEqual(1);
  });
});
