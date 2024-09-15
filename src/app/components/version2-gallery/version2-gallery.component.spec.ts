import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Version2GalleryComponent } from './version2-gallery.component';

describe('Version2GalleryComponent', () => {
  let component: Version2GalleryComponent;
  let fixture: ComponentFixture<Version2GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Version2GalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Version2GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
