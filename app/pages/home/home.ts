import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import { BandsListing } from './components/band-listing.component';

@Component({
  	templateUrl: 'build/pages/home/home.html',
	directives: [BandsListing]
})
export class HomePage {
  constructor(private navController: NavController) {
  
  }
}
