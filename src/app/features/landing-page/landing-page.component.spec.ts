import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { FeatureService } from '../../core/services/feature.service';
import { ClickableCardComponent } from '../../shared/clickable-card/clickable-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

describe('LandingPageComponent', () => {
    let component: LandingPageComponent;
    let fixture: ComponentFixture<LandingPageComponent>;
    let featureService: jasmine.SpyObj<FeatureService>;

    beforeEach(async () => {
        // Create spy for FeatureService
        featureService = jasmine.createSpyObj('FeatureService', [
            'getFeatures',
        ]);

        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MatCardModule,
                MatButtonModule,
                LandingPageComponent,
                ClickableCardComponent,
            ],
            providers: [{ provide: FeatureService, useValue: featureService }],
        }).compileComponents();

        fixture = TestBed.createComponent(LandingPageComponent);
        component = fixture.componentInstance;
    });

    beforeEach(() => {
        // Reset component state before each test
        component.features = [
            {
                title: 'Team Planner',
                link: '/team-planner',
                description: 'Plan your team',
            },
            {
                title: 'Region Map',
                link: '/region-map',
                description: 'Explore regions',
            },
        ];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a header with correct text', () => {
        const headerElement = fixture.nativeElement.querySelector('.header');
        expect(headerElement).toBeTruthy();
        expect(headerElement.textContent).toContain('Welcome to DexAtlas');
    });

    it('should have features defined with correct data', () => {
        expect(component.features).toBeDefined();
        expect(component.features.length).toBe(2);
        expect(component.features[0].title).toBe('Team Planner');
        expect(component.features[1].title).toBe('Region Map');
    });

    it('should render clickable cards for each feature', () => {
        const cards =
            fixture.nativeElement.querySelectorAll('app-clickable-card');
        expect(cards.length).toBe(2);
    });

    it('should have correct container structure', () => {
        const container =
            fixture.nativeElement.querySelector('.landing-container');
        const buttonContainer =
            fixture.nativeElement.querySelector('.button-container');

        expect(container).toBeTruthy();
        expect(buttonContainer).toBeTruthy();
    });

    it('should initialize hover state as false', () => {
        expect(component.hover).toBeFalse();
    });
});
