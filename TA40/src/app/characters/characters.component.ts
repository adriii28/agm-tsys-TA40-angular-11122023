import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [HttpClientModule,RouterModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
  personajes : any = null;
  personajesRandom: number[] = [];

  constructor(private http: HttpClient){ }

  ngOnInit(){
    this.getRandomNumber();
    
    this.http.get(`https://rickandmortyapi.com/api/character/${this.personajesRandom[0]},${this.personajesRandom[1]},${this.personajesRandom[2]},${this.personajesRandom[3]},${this.personajesRandom[4]}`)
    .subscribe(
      result => {
        console.log('funsiona t');
        this.personajes= result;
        console.log(this.personajes);

      },
      error => {
        console.log('problemon');
        
      }
    );
  }

  getRandomNumber(): void {
    for (let i = 0; i < 5; i++) {
      const randomNumber = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
      this.personajesRandom.push(randomNumber);
    }
  }
}
