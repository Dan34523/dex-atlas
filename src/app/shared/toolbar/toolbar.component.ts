import { Component, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Feature } from '../../core/models/feature.model';
import { FeatureService } from '../../core/services/feature.service';
import { ThemeService } from '../../core/services/theme.service';
import { MatIconModule } from '@angular/material/icon';
import { TeamBuilderService } from '../../core/services/team-builder.service';
import { Generation } from 'pokenode-ts';

@Component({
    selector: 'app-toolbar',
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, RouterModule, MatIconModule],
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
    features: Feature[] = [];
    isDark: Signal<boolean>;
    selectedGeneration: Signal<Generation | null>;
    genSelected: Signal<boolean>;

    constructor(
        private featureService: FeatureService,
        private theme: ThemeService,
        private teamBuilder: TeamBuilderService
    ) {
        this.features = this.featureService.getFeatures();
        this.isDark = this.theme.isDark;
        this.selectedGeneration = this.teamBuilder.selectedGeneration;
        this.genSelected = this.teamBuilder.generationChosen;
    }

    toggleDark(): void {
        this.theme.toggle();
    }
}
