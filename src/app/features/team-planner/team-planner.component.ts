import { Component, Signal } from '@angular/core';
import { GenChooserComponent } from './gen-chooser/gen-chooser.component';
import { TeamBuilderService } from '../../core/services/team-builder.service';

@Component({
    selector: 'app-team-planner',
    imports: [GenChooserComponent],
    templateUrl: './team-planner.component.html',
    styleUrl: './team-planner.component.scss',
})
export class TeamPlannerComponent {
    genChosen: Signal<boolean>;

    constructor(private teamBuilder: TeamBuilderService) {
        this.genChosen = this.teamBuilder.generationChosen;
    }
}
