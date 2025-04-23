import { TestBed } from '@angular/core/testing';
import { FeatureService } from './feature.service';
import { Feature } from '../models/feature.model';

describe('FeatureService', () => {
    let service: FeatureService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FeatureService],
        });
        service = TestBed.inject(FeatureService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getFeatures', () => {
        it('should return an array of features', () => {
            const features = service.getFeatures();
            expect(Array.isArray(features)).toBe(true);
            expect(features.length).toBe(2);
        });

        it('should return features with required properties', () => {
            const features = service.getFeatures();
            features.forEach((feature: Feature) => {
                expect(feature.title).toBeDefined();
                expect(typeof feature.title).toBe('string');
                expect(feature.description).toBeDefined();
                expect(typeof feature.description).toBe('string');
                expect(feature.link).toBeDefined();
                expect(typeof feature.link).toBe('string');
            });
        });
    });
});
