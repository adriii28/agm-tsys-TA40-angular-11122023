import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutComponent } from './about/about.component';
import { CharacterItemComponent } from './character-item/character-item.component';


export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'characters',
        component: CharactersComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'character',
        component: CharacterItemComponent
    },
    {
        path: 'character/:id',
        component: CharacterItemComponent
    }
];
