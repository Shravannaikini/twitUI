import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabifluComponent } from './fabiflu.component';

describe('FabifluComponent', () => {
  let component: FabifluComponent;
  let fixture: ComponentFixture<FabifluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabifluComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabifluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
