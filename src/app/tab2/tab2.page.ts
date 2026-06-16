import { Component } from '@angular/core';
import { ISerie } from '../model/ISerie';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(public router: Router, private alertController: AlertController, private toastController: ToastController) {}
  listarSeries: ISerie[] = [
    {
      nome: "Dexter (2006)",
      lancamento: "01/10/2006",
      temporadas: "8 temporadas",
      classificacao: 7,
      cartaz: "https://www.themoviedb.org/t/p/w1280/f1nV5NBIFwfQLw5g8FVrdt90FAy.jpg",
      generos: ["Crime", "Drama", "Mistério"],
      pagina: '/dexter',
      favorito: false
    },
    {
      nome: "Lúcifer (2016)",
      lancamento: "25/01/2016",
      temporadas: "6 temporadas",
      classificacao: 5,
      cartaz: "https://www.themoviedb.org/t/p/w1280/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg",
      generos: ["Crime", "Ficção Científica", "Fantasia"],
      pagina: '/lucifer',
      favorito: false
    },
    {
      nome: "La Casa de Papel (2017)",
      lancamento: "02/05/2017",
      temporadas: "5 temporadas",
      classificacao: 3,
      cartaz: "https://www.themoviedb.org/t/p/w1280/yVUAfbrP5HDJugXraB7KQS0yz6Z.jpg",
      generos: ["Crime", "Drama "],
      pagina: '/lacasadepapel',
      favorito: false
    }
  ]
  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'], navigationExtras);
  };

  async exibirAlertaFavorito(serie: ISerie){
    const alert = await this.alertController.create({
      header: 'Meus favoritos',
      message: 'Deseja realmente favoritar a série?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            serie.favorito = false
          }
        },
        {
          text: 'Sim, favoritar',
          handler: () => {
            serie.favorito = true;
            this.apresentarToast();
          }
        }

      ]
    })
    await alert.present();
  }

  async apresentarToast(){
    const toast = await this.toastController.create({
      message: 'Série adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
  });
  toast.present();
  }
}
