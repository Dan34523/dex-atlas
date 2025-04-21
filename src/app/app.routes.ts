import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing-page/landing-page.component').then(m => m.LandingPageComponent)
  },
  {
    path: 'team-planner',
    loadComponent: () =>
      import('./features/team-planner/team-planner.component').then(m => m.TeamPlannerComponent)
  },
  {
    path: 'region-map',
    loadComponent: () =>
      import('./features/region-map/region-map.component').then(m => m.RegionMapComponent)
  }
];
