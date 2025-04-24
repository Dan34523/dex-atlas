import { Component } from '@angular/core';
import { GenChooserComponent } from './gen-chooser/gen-chooser.component';

@Component({
    selector: 'app-team-planner',
    imports: [GenChooserComponent],
    templateUrl: './team-planner.component.html',
    styleUrl: './team-planner.component.scss',
})
export class TeamPlannerComponent {}
