import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerResearchComponent } from './banner-research.component';

describe('BannerResearchComponent', () => {
  let component: BannerResearchComponent;
  let fixture: ComponentFixture<BannerResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
