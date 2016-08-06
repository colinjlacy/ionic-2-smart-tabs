import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import { SourceListing } from './../../components/listing.component.ts';
import { SOURCES } from './../../data/data';
import { SourceListModel } from './../../data/data.models';

@Component({
  	templateUrl: 'build/pages/home/home.html',
	directives: [SourceListing]
})
export class HomePage {
	public bands: SourceListModel;
	constructor(public nav: NavController) {
		this.bands = SOURCES.filter(x => x.type === 'band');
	}
}
