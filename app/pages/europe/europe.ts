/**
 * Created by colinjlacy on 8/6/16.
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import { SourceListing } from './../../components/listing.component.ts';
import { SOURCES } from './../../data/data';
import { SourceListModel } from './../../data/data.models';

@Component({
	template: `
	<ion-navbar *navbar>
		<ion-title>List of Countries</ion-title>
	</ion-navbar>

	<ion-content>
		<source-listing [sources]="countries"></source-listing>
	</ion-content>
	`,
	directives: [SourceListing]
})
export class EuropePage {
	public countries: SourceListModel;
	constructor(public nav: NavController) {
		this.countries = SOURCES.filter(x => x.type === 'europe');
	}
}
