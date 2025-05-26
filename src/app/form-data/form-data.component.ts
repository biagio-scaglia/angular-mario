import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form-data.component.html',
  styleUrl: './form-data.component.css',
})
export class FormDataComponent {
  formData = {
    name: '',
    surname: '',
    address: '',
    city: '',
    zip: '',
    region: '',
    phone: '',
    email: ''
  };

  italianRegions = [
    'Abruzzo',
    'Basilicata',
    'Calabria',
    'Campania',
    'Emilia-Romagna',
    'Friuli-Venezia Giulia',
    'Lazio',
    'Liguria',
    'Lombardia',
    'Marche',
    'Molise',
    'Piemonte',
    'Puglia',
    'Sardegna',
    'Sicilia',
    'Toscana',
    'Trentino-Alto Adige',
    'Umbria',
    'Valle d\'Aosta',
    'Veneto'
  ];

  showResult = false;
  resultMessage = '';
  formError = '';

  saveForm(
    event: Event, 
    name: string, 
    surname: string, 
    address: string, 
    city: string, 
    zip: string, 
    region: string,
    phone: string,
    email: string
  ) {
    event.preventDefault();
    this.formError = '';

    if (!name.trim()) {
      this.formError = 'Inserisci un nome valido';
      return;
    }

    if (!surname.trim()) {
      this.formError = 'Inserisci un cognome valido';
      return;
    }

    if (!address.trim()) {
      this.formError = 'Inserisci un indirizzo valido';
      return;
    }

    if (!city.trim()) {
      this.formError = 'Inserisci una città valida';
      return;
    }

    if (!zip.trim()) {
      this.formError = 'Inserisci un CAP valido';
      return;
    }

    if (!region.trim()) {
      this.formError = 'Seleziona una regione';
      return;
    }

    if (!phone.trim()) {
      this.formError = 'Inserisci un numero di telefono valido';
      return;
    }

    if (!email.trim() || !this.validateEmail(email)) {
      this.formError = 'Inserisci un indirizzo email valido';
      return;
    }

    const newUser = { 
      name, 
      surname, 
      address, 
      city, 
      zip, 
      region, 
      phone, 
      email, 
      timestamp: new Date().toISOString() 
    };

    if (typeof window !== 'undefined' && window.localStorage) {
      const existingUsers = localStorage.getItem('formUsers');
      let users = [];
      if (existingUsers) {
        users = JSON.parse(existingUsers);
      }
      users.push(newUser);
      localStorage.setItem('formUsers', JSON.stringify(users));
    }

    this.resultMessage = `Dati salvati: ${name} ${surname}, ${address}, ${city}, ${zip}, ${region}, ${phone}, ${email}`;
    this.showResult = true;
    this.formData = { name: '', surname: '', address: '', city: '', zip: '', region: '', phone: '', email: '' };
  }

  validateEmail(email: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  resetForm() {
    this.formData = { 
      name: '', 
      surname: '', 
      address: '', 
      city: '', 
      zip: '', 
      region: '', 
      phone: '', 
      email: '' 
    };
    this.showResult = false;
    this.formError = '';
  }
}