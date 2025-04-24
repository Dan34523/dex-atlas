import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenChooserComponent } from './gen-chooser.component';

describe('GenChooserComponent', () => {
  let component: GenChooserComponent;
  let fixture: ComponentFixture<GenChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenChooserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
