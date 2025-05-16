import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInformationComponent } from './view-information.component';
import {Root, Body} from "../model/model";

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

  it('should view oninit', () => {
    const data: Body = {
      firstName: "andres",
      secondName: "felipe",
      firstLastName: "franco",
      secondLastName: "monroy",
      phone: 123123,
      address: "calle falsa 123",
      city: "medellin"
    }
    const root: Root = {
      code: 0,
      httpStatus: "1",
      message: "successfull",
      body: data
    }

    component.data = data;

    expect(component.data).toBe(data);
  });
});
