import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmHelperGraphComponent } from './cm-helper-graph.component';

describe('CmHelperGraphComponent', () => {
  let component: CmHelperGraphComponent;
  let fixture: ComponentFixture<CmHelperGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmHelperGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmHelperGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
