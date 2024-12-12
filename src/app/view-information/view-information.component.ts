import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {ThousandDirective} from "../utils/ThousandDirective";
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";
import {Body, Root} from "../model/model";

@Component({
  selector: 'app-view-information',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    ThousandDirective
  ],
  templateUrl: './view-information.component.html',
  styleUrls: ['./view-information.component.scss']
})
export class ViewInformationComponent implements OnInit {

  data: Body | undefined;

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    const root: Root = this.dataService.getData();
    if (root)
      this.data = root.body;
  }

}
