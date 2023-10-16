import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundlecardComponent } from './bundlecard.component';

describe('BundlecardComponent', () => {
  let component: BundlecardComponent;
  let fixture: ComponentFixture<BundlecardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BundlecardComponent]
    });
    fixture = TestBed.createComponent(BundlecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
