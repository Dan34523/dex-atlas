import { Component } from '@angular/core';
import { TeamComponent } from '../team/team.component';
import { AnalysisComponent } from '../analysis/analysis.component';

@Component({
    selector: 'app-team-dashboard',
    imports: [TeamComponent, AnalysisComponent],
    templateUrl: './team-dashboard.component.html',
    styleUrl: './team-dashboard.component.scss',
})
export class TeamDashboardComponent {}
