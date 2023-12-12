import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-item',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './character-item.component.html',
  styleUrl: './character-item.component.css'
})
export class CharacterItemComponent {

  characterId : string= '';
  personaje : any = null;

  constructor(private ruta: ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void{
    console.log("on init character");
    this.ruta.paramMap.subscribe(params => {
      const idFromParams = params.get('id');
      
      if (idFromParams !== null) {
        this.characterId = idFromParams;
        this.http.get("https://rickandmortyapi.com/api/character/"+this.characterId)
        .subscribe(
          result => {
            this.personaje= result;
            console.log(this.personaje);
            
          },
          error => {
            console.log('problemon');
          }
        );
      } else {
        console.error('No se encontró el parámetro "id" en la URL.');
      }
    });
  }
}
