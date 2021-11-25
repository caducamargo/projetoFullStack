import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamoradoComponent } from './namorado.component';

describe('NamoradoComponent', () => {
  let component: NamoradoComponent;
  let fixture: ComponentFixture<NamoradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamoradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
