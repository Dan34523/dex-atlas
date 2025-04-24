import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickableCardComponent } from '../../../shared/clickable-card/clickable-card.component';
import { PokenodeService } from '../../../core/services/pokenode.service';
import { Generation } from 'pokenode-ts';

@Component({
    selector: 'app-gen-chooser',
    imports: [ClickableCardComponent, CommonModule],
    templateUrl: './gen-chooser.component.html',
    styleUrl: './gen-chooser.component.scss',
})
export class GenChooserComponent implements OnInit {
    generations: Generation[] = [];

    constructor(private poke: PokenodeService) {}

    async ngOnInit() {
        this.generations = await this.poke.getGameGenerations();
    }
}
