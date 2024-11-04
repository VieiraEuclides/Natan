import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'formulario.page.html',
  styleUrls: ['/formulario.page.scss'],
})
export class HomePage {
  // Definindo os dados do formulário
  formData = {
    peso: '',
    velocidadeProducao: '',
    volume: '',
    produtosPorMinuto: '',
    detalhes: ''
  };

  constructor() {}

  // Função para enviar os dados do formulário a trabalhar
  submitForm() {
    console.log(this.formData);
  }
}

