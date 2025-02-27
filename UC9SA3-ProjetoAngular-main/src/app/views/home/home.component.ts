import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Noticias } from 'src/app/models/noticias';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private noticiaService: NoticiasService) { }

  listaNoticias = [] as Noticias []

  ngOnInit(): void {

    this.carregarNoticias()

  }

  carregarNoticias(){

    this.noticiaService.getNoticias().subscribe((noticiasRecebidas: Noticias []) => {

      this.listaNoticias = noticiasRecebidas

      console.log(this.listaNoticias);
    })
  }

  
}
  