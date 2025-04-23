import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClickableCardComponent } from './clickable-card.component';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { provideRouter } from '@angular/router';

describe('ClickableCardComponent', () => {
    let component: ClickableCardComponent;
    let fixture: ComponentFixture<ClickableCardComponent>;
    let router: Router;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MatCardModule],
            providers: [provideRouter([])],
            declarations: [ClickableCardComponent],
        }).compileComponents();

        router = TestBed.inject(Router);
        fixture = TestBed.createComponent(ClickableCardComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display provided title', () => {
        const testTitle = 'Test Title';
        component.title = testTitle;
        fixture.detectChanges();

        const titleElement = fixture.nativeElement.querySelector('.title');
        expect(titleElement.textContent).toContain(testTitle);
    });

    it('should display provided description', () => {
        const testDesc = 'Test Description';
        component.description = testDesc;
        fixture.detectChanges();

        const descElement = fixture.nativeElement.querySelector('.description');
        expect(descElement.textContent).toContain(testDesc);
    });

    it('should navigate to provided link when clicked', () => {
        const navigateSpy = spyOn(router, 'navigate');
        const testLink = '/test-route';
        component.link = testLink;

        const card = fixture.nativeElement.querySelector('.feature-card');
        card.click();

        expect(navigateSpy).toHaveBeenCalledWith([testLink]);
    });

    it('should have correct CSS classes', () => {
        fixture.detectChanges();
        const card = fixture.nativeElement.querySelector('.feature-card');
        expect(card).toBeTruthy();
        expect(card.classList.contains('feature-card')).toBeTruthy();
    });
});
