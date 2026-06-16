import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-atores-detalhe',
  templateUrl: './atores-detalhe.page.html',
  styleUrls: ['./atores-detalhe.page.scss'],
  standalone: false
})
export class AtoresDetalhePage implements OnInit {
  ator: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      const getNav = this.router.getCurrentNavigation();
      if(getNav?.extras.state){
        this.ator = getNav.extras.state['paramAtores']
      }
    })
  }

}