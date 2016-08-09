/**
 * Created by colinjlacy on 8/6/16.
 */
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SongListingPage } from '../pages/songs/songs';
import { SourceListModel } from '../data/data.models';

@Component({
	selector: 'source-listing',
	template: `
	<ion-list>
		<ion-item *ngFor="let source of sources" (tap)="viewSongs($event, source.id)">
			{{source.name}}
		</ion-item>
	</ion-list>
	`
})
export class SourceListing {
	@Input() sources: SourceListModel;

	constructor(private nav: NavController) {}

	viewSongs(e, sourceId) {
		this.nav.push(SongListingPage, {
			sourceId: sourceId
		});
	}
}
