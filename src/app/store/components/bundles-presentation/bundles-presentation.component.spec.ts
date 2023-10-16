import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundlesPresentationComponent } from './bundles-presentation.component';

describe('BundlesPresentationComponent', () => {
  let component: BundlesPresentationComponent;
  let fixture: ComponentFixture<BundlesPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BundlesPresentationComponent]
    });
    fixture = TestBed.createComponent(BundlesPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
