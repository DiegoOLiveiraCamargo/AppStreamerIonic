import { Component } from '@angular/core';
import { IAtores } from '../model/IAtores';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor(public router: Router, private alertController: AlertController, private toastController: ToastController) {}
  listarAtores: IAtores[] = [
    {
      nome: "Adam Sandler",
      idade: "59 anos",
      dataNascimento: "09/09/1966",
      principaisPapeis: ["Gente Grande", "Click", "Como se fosse a primeira vez"],
      cartaz: "https://media.themoviedb.org/t/p/w600_and_h900_face/iTMnXrPfC1rmom6a9q4hy6YSJWG.jpg",
      favorito: false
    },
    {
      nome: "Dylan O'brien",
      idade: "34 anos",
      dataNascimento: "26/08/1991",
      principaisPapeis: ["Maze Runner", "BumbleBee", "Teen Wolf"],
      cartaz: "https://media.themoviedb.org/t/p/w600_and_h900_face/xN3GdvIlqsR838gDoblhPH0numP.jpg",
      favorito: false
    },
    {
      nome: "Ana de Armas",
      idade: "38 anos",
      dataNascimento: "30/04/1988",
      principaisPapeis: ["Blade Runner 2049", "Agente Oculto", "Cães de Guerra"],
      cartaz: "https://media.themoviedb.org/t/p/w600_and_h900_face/3vxvsmYLTf4jnr163SUlBIw51ee.jpg",
      favorito: false
    }
  ]
  exibirAtor(ator: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtores:ator}};
    this.router.navigate(['atores-detalhe'], navigationExtras);
  };
  async exibirAlertaFavorito(ator: IAtores){
      const alert = await this.alertController.create({
        header: 'Meus favoritos',
        message: 'Deseja realmente favoritar o ator?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              ator.favorito = false
            }
          },
          {
            text: 'Sim, favoritar',
            handler: () => {
              ator.favorito = true;
              this.apresentarToast();
            }
          }
  
        ]
      })
      await alert.present();
    }
  
    async apresentarToast(){
      const toast = await this.toastController.create({
        message: 'Ator adicionado aos favoritos...',
        duration: 2000,
        color: 'success'
    });
    toast.present();
    }
}
