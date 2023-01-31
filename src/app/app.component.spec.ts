import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SelectFormComponent } from './components/select-form/select-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




describe('AppComponent', () => {
  let component:  SelectFormComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatInputModule,
        MatIconModule,
        MatSlideToggleModule
      ],
      declarations:[
        SelectFormComponent
      ]
    }).compileComponents();
    const fixture = TestBed.createComponent(SelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges;
  });



  it('Corroborando que parametros acepten números', ()=>{
    const mocka = component.menS;
    const numero1 = component.numero1
    const numero2 = component.numero2;
    expect(numero1 && numero2).toBeInstanceOf(Number);
  })

  it('Corroborando que parametros booleanos, estén bien', ()=>{
    const sumaB = component.sumar;
    const restaB = component.restar;
    const diviB = component.dividir;
    const multiB = component.multiplicar;
    expect(sumaB && restaB&&diviB&&multiB).toBe(false)
  })


  it('Corroborando variables para recibir datos i son numero o cadena', ()=>{
    const sumaM = component.sumaSum;
    const restaM = component.restaRes;
    const multiM = component.multiMult;
    const divdiM = component.divdiDiv;

    expect(restaM && sumaM&& multiM&& divdiM).toBeInstanceOf(Number|| String);
  });



});
