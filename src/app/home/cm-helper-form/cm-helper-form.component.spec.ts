import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmHelperFormComponent } from './cm-helper-form.component';

describe('CmHelperFormComponent', () => {
  let component: CmHelperFormComponent;
  let fixture: ComponentFixture<CmHelperFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmHelperFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmHelperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
