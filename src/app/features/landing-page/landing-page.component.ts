import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ClickableCardComponent } from '../../shared/clickable-card/clickable-card.component';
import { Feature } from './models/feature.model';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [
        RouterModule,
        MatButtonModule,
        MatButtonModule,
        MatCardModule,
        ClickableCardComponent,
    ],
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
    hover = false;

    features: Feature[] = [
        {
            title: 'Team Planner',
            description: 'Build your ultimate Pokémon team!',
            link: '/team-planner',
        },
        {
            title: 'Region Map',
            description: 'Explore the Pokémon world!',
            link: '/region-map',
        },
    ];
}
