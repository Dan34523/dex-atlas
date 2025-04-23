import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ToolbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    showToolbar = signal(false);

    constructor(router: Router) {
        router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.showToolbar.set(e.urlAfterRedirects !== '/');
            }
        });
    }
}
