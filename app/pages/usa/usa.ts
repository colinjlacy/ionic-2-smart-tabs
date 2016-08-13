import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import { SourceListing } from './../../components/listing.component.ts';
import { SOURCES } from './../../data/data';
import { SourceListModel } from './../../data/data.models';

@Component({
  	templateUrl: 'build/pages/usa/usa.html',
	directives: [SourceListing]
})
export class UsaPage {
	public states: SourceListModel;
	constructor(public nav: NavController) {
		this.states = SOURCES.filter(x => x.type === 'usa');
	}
}
