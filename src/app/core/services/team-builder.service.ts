import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Generation } from 'pokenode-ts';

@Injectable({
    providedIn: 'root',
})
export class TeamBuilderService {
    private _selectedGeneration: WritableSignal<Generation | null> = signal(null);

    generationChosen: Signal<boolean> = computed(() => {
        return this._selectedGeneration() !== null;
    });
    selectedGeneration: Signal<Generation | null> = this._selectedGeneration.asReadonly();

    constructor() {}

    setSelectedGeneration(generation: Generation): void {
        this._selectedGeneration.set(generation);
    }

    clearSelectedGeneration(): void {
        this._selectedGeneration.set(null);
    }
}
