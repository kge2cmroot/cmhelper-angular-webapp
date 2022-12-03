import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmHelperViewComponent } from './cm-helper-view.component';

describe('CmHelperViewComponent', () => {
  let component: CmHelperViewComponent;
  let fixture: ComponentFixture<CmHelperViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmHelperViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmHelperViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
