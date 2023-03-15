import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiledImagesComponent } from './tiled-images.component';

describe('TiledImagesComponent', () => {
  let component: TiledImagesComponent;
  let fixture: ComponentFixture<TiledImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiledImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiledImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
