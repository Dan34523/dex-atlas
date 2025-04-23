import { Injectable } from '@angular/core';
import { Feature } from '../models/feature.model';

@Injectable({
    providedIn: 'root',
})
export class FeatureService {
    readonly features: Feature[] = [
        {
            title: 'Team Planner',
            description: 'Build your ultimate Pokémon team!',
            link: '/team-planner',
        },
        {
            title: 'Region Map',
            description: 'Explore the world of Pokémon!',
            link: '/region-map',
        },
    ];
}
