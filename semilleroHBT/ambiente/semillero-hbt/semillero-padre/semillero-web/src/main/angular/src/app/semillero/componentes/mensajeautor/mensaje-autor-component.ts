
import { OnInit, Component } from '@angular/core';
import { constructor } from 'minimatch';
@Component({
    selector: 'mensajeautor',
    templateUrl: './mensaje-autor-component.html',
})
export class MensajeAutorComponent implements OnInit {
   
   public nombre : String = "Junior Bustamante";

   public ciudad = "Monteria";
   
   
    ngOnInit(): void {
        let titulo = this.nombre.concat(this.ciudad); 
       
        console.log(titulo);;
    }

    
        constructor() {
                  }



}




 

  
