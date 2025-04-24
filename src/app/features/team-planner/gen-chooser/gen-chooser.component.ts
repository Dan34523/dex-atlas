import { Component, effect, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ClickableCardComponent } from '../../../shared/clickable-card/clickable-card.component';
import { PokenodeService } from '../../../core/services/pokenode.service';
import { Generation } from 'pokenode-ts';
import { TeamBuilderService } from '../../../core/services/team-builder.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SkeletonCardLoaderComponent } from '../../../shared/skeleton-card-loader/skeleton-card-loader.component';

@Component({
    selector: 'app-gen-chooser',
    imports: [ClickableCardComponent, CommonModule, MatProgressSpinnerModule, SkeletonCardLoaderComponent],
    templateUrl: './gen-chooser.component.html',
    styleUrl: './gen-chooser.component.scss',
})
export class GenChooserComponent {
    loading = signal(true);
    generations: Signal<Generation[]>;

    // Create an array for skeleton repeaters
    skeletonArray = Array(9).fill(0); // Show 9 skeleton cards

    constructor(private poke: PokenodeService, private teamBuilder: TeamBuilderService) {
        this.generations = toSignal(from(this.poke.getGameGenerations()), { initialValue: [] });

        effect(() => {
            if (this.generations().length > 0) {
                this.loading.set(true);
            }
        });
    }

    selectGen(gen: Generation) {
        this.teamBuilder.setSelectedGeneration(gen);
    }
}
