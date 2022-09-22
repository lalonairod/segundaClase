import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnoComponent } from './components/uno/uno.component';
import { CompartidoService } from '../../services/compartido/compartido.service';



@NgModule({
  declarations: [
    UnoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UnoComponent
  ]
})
export class UnoModule { }
