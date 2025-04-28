import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-skeleton-card-loader',
    imports: [MatCardModule],
    templateUrl: './skeleton-card-loader.component.html',
    styleUrl: './skeleton-card-loader.component.scss',
})
export class SkeletonCardLoaderComponent {}
