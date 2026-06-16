import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(public router: Router, private alertController: AlertController, private toastController: ToastController ) {}

  listarFilmes: IFilme[] = [
    {
      nome: "Mortal Kombat (2021)",
      lancamento: "15/04/2021",
      duracao: "1h50m",
      classificacao: 9,
      cartaz: "https://www.themoviedb.org/t/p/w1280/ybrX94xQm8lXYpZAPRmwD9iIbWP.jpg",
      generos: ["Ação", "Fantasia", "Aventura"],
      pagina: "/mortal-kombat",
      favorito: false
    },
    {
      nome: "Vingadores: Ultimato (2019)",
      lancamento: "25/04/2019",
      duracao: "3h01m",
      classificacao: 6,
      cartaz: "https://www.themoviedb.org/t/p/w1280/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
      generos: ["Aventura", "Ficção Científica", "Ação"],
      pagina: "/avengers",
      favorito: false
    },
    {
      nome: "La La Land: Cantando Estações (2016)",
      lancamento: "12/01/2007",
      duracao: "2h08m",
      classificacao: 10,
      cartaz: "https://www.themoviedb.org/t/p/w1280/AvMietG6xuobpSSdmVnKuTjv4bL.jpg",
      generos: ["Comédia", "Drama", "Romance"],
      pagina: "/lalaland",
      favorito: false
    },
    {
      nome: " Carros 2 (2011)",
      lancamento: "16/06/2011",
      duracao: "1h46m",
      classificacao: 2,
      cartaz: "https://www.themoviedb.org/t/p/w1280/fIKaabvE40T39nOIngcZPcPJeYe.jpg",
      generos: ["Animação", "Família", "Comédia"],
      pagina: "/carros2",
      favorito: false
    },
    {
      nome: " Pobres Criaturas (2023)",
      lancamento: "08/12/2023",
      duracao: "2h21m",
      classificacao: 4,
      cartaz: "https://www.themoviedb.org/t/p/w1280/iOdcXYSVzBgmBJzNIlIMOZ6fz0F.jpg",
      generos: ["Ficção Científica", "Romance", "Comédia"],
      pagina: "/pobrescriaturas",
      favorito: false
    }

  ];

  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras);
  };

  async exibirAlertaFavorito(filme: IFilme){
    const alert = await this.alertController.create({
      header: 'Meus favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            filme.favorito = false
          }
        },
        {
          text: 'Sim, favoritar',
          handler: () => {
            filme.favorito = true;
            this.apresentarToast();
          }
        }

      ]
    })
    await alert.present();
  }

  async apresentarToast(){
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
  });
  toast.present();
  }
};
