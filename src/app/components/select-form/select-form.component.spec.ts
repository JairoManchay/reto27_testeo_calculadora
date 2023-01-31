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
  it('Detectar si calcular funciona con operador de suma con false', ()=>{
    const mocka ={numero1: 1, numero2: 3};
    const suma = component.sumaSum = mocka.numero1 + mocka.numero2;
    const boo = component.sumar=true;
    const btnEnviar = fixture.debugElement.query(By.css('#btnEnviar'));
    btnEnviar.nativeElement.click();


    expect(suma).toEqual(4);
  });

});
