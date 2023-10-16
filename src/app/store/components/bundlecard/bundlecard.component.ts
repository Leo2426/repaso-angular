import {Component, Input} from '@angular/core';
import {Bundle} from "../../models/bundle";
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-bundlecard',
  templateUrl: './bundlecard.component.html',
  styleUrls: ['./bundlecard.component.css']
})
export class BundlecardComponent {
  @Input() bundle = {} as Bundle;
  @Input() save:any;

  protected readonly DecimalPipe = DecimalPipe;
}
