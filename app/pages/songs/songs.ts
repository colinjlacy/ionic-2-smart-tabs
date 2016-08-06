/**
 * Created by colinjlacy on 8/6/16.
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BandModel, SongListModel } from '../../data/data.models';
import { BANDS, SONGS } from '../../data/data';

@Component({
	template: `
	<ion-navbar *navbar>
		<ion-title>{{band.name}}</ion-title>
	</ion-navbar>

	<ion-content padding class="home">
		<ion-list>
			<ion-item *ngFor="let song of songs" (click)="viewSong(song.id)">
				{{song.name}}
			</ion-item>
		</ion-list>
	</ion-content>
	`
})
export class SongListingPage {
	public band: BandModel;
	public songs: SongListModel;

	constructor(private nav: NavController, private params: NavParams) {
		this.band = BANDS.find(x => x.id === this.params.data.bandId);
		this.songs = SONGS.filter(x => x.band === this.params.data.bandId);
	}

	viewSong(songId) {
		console.log(songId);
	}
}