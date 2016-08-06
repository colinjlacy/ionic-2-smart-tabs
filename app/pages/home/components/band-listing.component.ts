/**
 * Created by colinjlacy on 8/6/16.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SongListingPage } from '../../songs/songs';
import { BandListModel } from '../../../data/data.models';
import { BANDS } from '../../../data/data';

@Component({
	selector: 'band-listing',
	template: `
	<ion-list>
		<ion-item *ngFor="let band of bands" (click)="viewSongs(band.id)">
			{{band.name}}
		</ion-item>
	</ion-list>
	`,

})
export class BandsListing {
	public bands: BandListModel;

	constructor(private nav: NavController) {
		this.bands = BANDS;
	}

	viewSongs(bandId) {
		console.log(bandId);
		this.nav.push(SongListingPage, {
			bandId: bandId
		});
	}
}