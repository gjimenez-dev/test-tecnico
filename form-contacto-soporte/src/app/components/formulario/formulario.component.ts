import { FormcontactsupportService } from './../../services/formcontactsupport.service';
import { ContactoData } from './../../contactodata';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  contactodataModel = new ContactoData('', '', '', '', '', '');


  /* ----Array de las opciones de categoria -------- */
  Opciones: string[] = [
    'Facturación',
    'Soporte Técnico',
    'Ventas',
    'Información General'
  ];

  formularioContacto: FormGroup;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.formularioContacto = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      empresa: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      telefono: new FormControl('', [Validators.required, Validators.pattern('[+][0-9]{2}-[0-9]{11}')]),
      categoria: new FormControl('',[Validators.required]),
      mensaje: new FormControl('',[Validators.required])
    });
  }

  constructor(private formContactSupportService: FormcontactsupportService ) {}
  submitted = false;
  // tslint:disable-next-line:typedef
  onSubmit(): void {
    const data = {
      nameContact: this.contactodataModel.nombre,
      companyContact: this.contactodataModel.empresa,
      emailContact: this.contactodataModel.email,
      phoneContact: this.contactodataModel.telefono,
      categoryContact: this.contactodataModel.categoria,
      messContact: this.contactodataModel.mensaje
    };

    this.formContactSupportService.create(data).subscribe(
      response => {
        alert('FORMULARIO ENVIADO CON EXITO');
      },
      error => {
        alert('ERROR => ' +  error);
      }
    );

  }

}

