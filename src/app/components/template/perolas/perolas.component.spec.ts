import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerolasComponent } from './perolas.component';

describe('PerolasComponent', () => {
  let component: PerolasComponent;
  let fixture: ComponentFixture<PerolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerolasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
