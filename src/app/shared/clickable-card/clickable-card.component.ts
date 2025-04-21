import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-clickable-card',
    standalone: true,
    imports: [],
    templateUrl: './clickable-card.component.html',
    styleUrl: './clickable-card.component.scss',
})
export class ClickableCardComponent {
    @Input() title: string = 'Team Builder';
    @Input() description: string = 'Build your ultimate Pokémon team!';

    hover = false;
}
