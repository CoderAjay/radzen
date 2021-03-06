/*
  This file is automatically generated. Any changes will be overwritten.
  Modify products.component.ts instead.
*/
import { ViewChild, Injector, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { GridComponent } from '@radzen/angular';

import { SampleService } from '../sample.service';

export class ProductsGenerated implements OnInit, OnDestroy {
  // Components
  @ViewChild(GridComponent) grid0: GridComponent;

  // Array of messages displayed by the notification component.
  messages = [];

  router: Router;

  route: ActivatedRoute;

  _location: Location;

  subscription: Subscription;


  sample: SampleService;

  getProductsResult: any;

  getProductsCount: any;

  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.router = this.injector.get(Router);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.sample = this.injector.get(SampleService);

    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this instanceof <any>this.route.component) {
        this.parameters = this.route.snapshot.params;

        this.load();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  load() {
    this.sample.getProducts(null, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, this.grid0.allowPaging, null)
    .then(result => {
      this.getProductsResult = result.value;

      this.getProductsCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
    }, result => {

    });
  }

  grid0LoadData(event: any) {
    this.sample.getProducts(`${event.filter}`, this.grid0.allowPaging ? event.top : null, this.grid0.allowPaging ? event.skip : null, `${event.orderby}`, this.grid0.allowPaging, ``)
    .then(result => {
      this.getProductsResult = result.value;

      this.getProductsCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;
    }, result => {

    });
  }

  grid0Delete(event: any) {
    this.sample.deleteProduct(event.ID)
    .then(result => {
      this.messages.push({ severity: "success", summary: `Success`, detail: `Product deleted!` });
    }, result => {
      this.messages.push({ severity: "error", summary: `Error`, detail: `Unable to delete Product` });
    });
  }

  grid0Select(event: any) {
    if (window.innerWidth >= 500) { 
      this.router.navigate([{ outlets: { popup: ['edit-product', event.ID] } }]);
    } else {
      this.router.navigate(['edit-product', event.ID]);
    }
  }

  grid0Add(event: any) {
    if (window.innerWidth >= 500) { 
      this.router.navigate([{ outlets: { popup: ['add-product'] } }]);
    } else {
      this.router.navigate(['add-product']);
    }
  }
}
