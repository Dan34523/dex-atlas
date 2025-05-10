import { Component, effect, Signal, signal, WritableSignal } from '@angular/core';
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
    skeletonArray = Array(6).fill(0); // Show 9 skeleton cards

    constructor(private poke: PokenodeService, private teamBuilder: TeamBuilderService) {
        this.generations = toSignal(from(this.poke.getGameGenerations()), { initialValue: [] });

        effect(() => {
            if (this.generations().length > 0) {
                this.loading.set(false);
            }
        });
    }

    selectGen(gen: Generation) {
        this.teamBuilder.setSelectedGeneration(gen);
    }

    mockGens: Generation[] = [
        {
            id: 1,
            name: 'Gen 1',
            abilities: [],
            names: [],
            main_region: { name: 'Kanto', url: '' },
            moves: [],
            pokemon_species: [],
            types: [],
            version_groups: [],
        },
        {
            id: 2,
            name: 'Gen 2',
            abilities: [],
            names: [],
            main_region: { name: 'Johto', url: '' },
            moves: [],
            pokemon_species: [],
            types: [],
            version_groups: [],
        },
        {
            id: 3,
            name: 'Gen 3',
            abilities: [],
            names: [],
            main_region: { name: 'Hoenn', url: '' },
            moves: [],
            pokemon_species: [],
            types: [],
            version_groups: [],
        },
        {
            id: 4,
            name: 'Gen 4',
            abilities: [],
            names: [],
            main_region: { name: 'Sinnoh', url: '' },
            moves: [],
            pokemon_species: [],
            types: [],
            version_groups: [],
        },
        {
            id: 5,
            name: 'Gen 5',
            abilities: [],
            names: [],
            main_region: { name: 'Unova', url: '' },
            moves: [],
            pokemon_species: [],
            types: [],
            version_groups: [],
        },
        {
            id: 6,
            name: 'Gen 6',
            abilities: [],
            names: [],
            main_region: { name: 'Kalos', url: '' },
            moves: [],
            pokemon_species: [],
            types: [],
            version_groups: [],
        },
    ];
}
