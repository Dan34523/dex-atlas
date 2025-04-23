import { Injectable, signal, effect, computed } from '@angular/core';

/**
 * Service to manage light/dark mode using Angular signals
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
    private readonly STORAGE_KEY = 'darkMode';

    private dark = signal<boolean>(this.getInitialMode());

    // Expose a read-only computed signal
    readonly isDark = computed(() => this.dark());

    constructor() {
        // Apply theme on creation and whenever `dark` changes
        effect(() => this.applyTheme(this.dark()));
    }

    /** Toggle between light and dark mode */
    toggle(): void {
        this.dark.set(!this.dark());
        localStorage.setItem(this.STORAGE_KEY, String(this.dark()));
    }

    /** Determine initial mode: stored value or system preference */
    private getInitialMode(): boolean {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored !== null) return stored === 'true';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    /** Add/remove `.dark-mode` on <html> */
    private applyTheme(isDark: boolean): void {
        document.documentElement.classList.toggle('dark-mode', isDark);
    }
}
