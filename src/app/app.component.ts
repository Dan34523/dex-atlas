import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { ThemeService } from './core/services/theme.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ToolbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    showToolbar = signal(false);

    constructor(router: Router, theme: ThemeService) {
        // Theme is injected to ensure it is applied on app load
        // This is a side effect of the ThemeService constructor
        // and is not directly related to the AppComponent
        // The ThemeService constructor will apply the theme based on the user's preference
        // or the stored value in localStorage

        router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.showToolbar.set(e.urlAfterRedirects !== '/');
            }
        });
    }
}
