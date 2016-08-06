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
		<ion-title>List of Movies</ion-title>
	</ion-navbar>

	<ion-content>
		<source-listing [sources]="movies"></source-listing>
	</ion-content>
	`,
	directives: [SourceListing]
})
export class MoviesPage {
	public movies: SourceListModel;
	constructor(public nav: NavController) {
		this.movies = SOURCES.filter(x => x.type === 'band');
	}
}
