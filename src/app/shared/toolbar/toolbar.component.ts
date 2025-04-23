import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Feature } from '../../core/models/feature.model';
import { FeatureService } from '../../core/services/feature.service';

@Component({
    selector: 'app-toolbar',
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, RouterModule],
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
    features: Feature[] = [];
    constructor(private featureService: FeatureService) {
        this.features = this.featureService.getFeatures();
    }
}
