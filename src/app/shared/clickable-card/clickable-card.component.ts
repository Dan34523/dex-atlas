import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-clickable-card',
    standalone: true,
    imports: [MatCardModule, MatRippleModule],
    templateUrl: './clickable-card.component.html',
    styleUrl: './clickable-card.component.scss',
})
export class ClickableCardComponent {
    @Input() title: string = 'Title';
    @Input() description: string = 'Description';
    @Input() transparent: boolean = false;

    hover = false;
}
