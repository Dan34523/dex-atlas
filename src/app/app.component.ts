import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'dex-atlas';

    darkMode = signal(false);

    applyDarkMode = effect(() => {
        const darkMode = this.darkMode();
        document.body.classList.toggle('darkMode', darkMode);
    });
}
