import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInformationComponent } from './view-information.component';

describe('ViewInformationComponent', () => {
  let component: ViewInformationComponent;
  let fixture: ComponentFixture<ViewInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
