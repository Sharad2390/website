import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionScreenshotsComponent } from './section-screenshots.component';

describe('SectionScreenshotsComponent', () => {
  let component: SectionScreenshotsComponent;
  let fixture: ComponentFixture<SectionScreenshotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionScreenshotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionScreenshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
