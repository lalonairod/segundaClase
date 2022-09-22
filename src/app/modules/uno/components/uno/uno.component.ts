import { Component, OnInit } from '@angular/core';
import { CompartidoService } from '../../../../services/compartido/compartido.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  constructor( private compartidoService : CompartidoService) { }

  ngOnInit(): void {
    this.fillForm();
  }

  public fillForm(){
    
    let button = document.getElementById('btn-1');
    button?.addEventListener("click", () => {
      this.compartidoService.name = "Eduardo";
      this.compartidoService.email = "lalo@gmail.com";
      console.log("Componente 1: ", this.compartidoService);
    });
    
  }

  

}
