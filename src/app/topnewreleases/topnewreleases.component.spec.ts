import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnewreleasesComponent } from './topnewreleases.component';

describe('TopnewreleasesComponent', () => {
  let component: TopnewreleasesComponent;
  let fixture: ComponentFixture<TopnewreleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopnewreleasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnewreleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
