import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedStoriesExpandedComponent } from './featured-stories-expanded.component';

describe('FeaturedStoriesExpandedComponent', () => {
  let component: FeaturedStoriesExpandedComponent;
  let fixture: ComponentFixture<FeaturedStoriesExpandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedStoriesExpandedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedStoriesExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
