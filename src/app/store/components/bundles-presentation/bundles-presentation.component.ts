import { Component } from '@angular/core';
import {Bundle} from "../../models/bundle";
import {StoreService} from "../../../services/store.service";

@Component({
  selector: 'app-bundles-presentation',
  templateUrl: './bundles-presentation.component.html',
  styleUrls: ['./bundles-presentation.component.css']
})
export class BundlesPresentationComponent {
  bundles: Bundle[] = []
  data: number = 0;



  constructor(private service: StoreService) {
  }

  // funcion para traer los bundles
  getAllBundles() {
    this.service.getAllBundles().subscribe((data: Bundle[]) => {
        this.bundles = data;
      }
    )
  }

  ngOnInit(): void {
    this.getAllBundles();

  }

  protected readonly indexedDB = indexedDB;
}



