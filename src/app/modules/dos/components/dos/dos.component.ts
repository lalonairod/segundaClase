import { Component, OnInit } from '@angular/core';
import { CompartidoService } from 'src/app/services/compartido/compartido.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.scss']
})
export class DosComponent implements OnInit {

  constructor( public compartidoService : CompartidoService ) { }

  ngOnInit(): void {
    this.buttonUpdate();
    console.log("Componente 2: ",this.compartidoService);
  }

  getData(){

    let name : HTMLInputElement = document.getElementById("name") as HTMLInputElement;
    let email : HTMLInputElement = document.getElementById("email") as HTMLInputElement;

    name.value = this.compartidoService.name;
    email.value = this.compartidoService.email;

    console.log(name, email);
  }

  buttonUpdate(){
    let update = document.getElementById('btn-2');
    update?.addEventListener("click", () => {
      this.getData();
    });
  }

}
