import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public ocultar:boolean=true
  name: string
  movil_number: number
  Email: string
  notas: string
  namesList: any[]


  constructor(public alerta: AlertController) {

    this.name = ''
    this.movil_number = 0
    this.Email=''
    this.notas=''
    this.namesList = []
  }

  async showAlert(msg, header) {
    const instanciaAlert = await this.alerta.create({
      header: header,
      message: msg,
      buttons: ['Cerrar']
    });

    await instanciaAlert.present()
  }

  addName() {
    if (this.name != '' && this.movil_number != 0) {
      let nuevoName = {
        nombre:this.name,
        movil_number:this.movil_number,
        Email:this.Email,
        notas:this.notas
      }
      this.namesList.push(nuevoName)
      console.log(this.namesList)
      this.name = ''
      this.movil_number = 0
      this.Email = ''
      this.notas=''
      this.showAlert("Contacto agregado","Se añadió el contacto con éxito")
    }else{
      this.showAlert("Tienes campos sin llenar","¡Verifica los campos!")
    }
  }




  async eliminarName(indiceNames) {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar Contacto',
      message: '¿Estas seguro de que que quieres eliminar a...'+this.namesList[indiceNames].nombre + '?',
      buttons: [
        {
          text: 'CANCELAR',
          role: 'cancel',
        }, {
          text: 'OK',
          handler: () => {
            this.namesList.splice(indiceNames,1);
          }
        }
      ]
    });

    await alert.present();
  }
}
