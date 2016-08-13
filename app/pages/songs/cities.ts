/**
 * Created by colinjlacy on 8/6/16.
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SourceModel, SongListModel } from '../../data/data.models';
import { SOURCES, SONGS } from '../../data/data';

@Component({
	template: `
	<ion-navbar *navbar>
		<ion-title>{{source.name}}</ion-title>
	</ion-navbar>

	<ion-content>
		<ion-list>
			<ion-item *ngFor="let song of songs">
				{{song.name}}
			</ion-item>
		</ion-list>
	</ion-content>
	`
})
export class SongListingPage {
	public source: SourceModel;
	public songs: SongListModel;

	constructor(private nav: NavController, private params: NavParams) {
		this.source = SOURCES.find(x => x.id === this.params.data.sourceId);
		this.songs = SONGS.filter(x => x.source === this.params.data.sourceId);
	}
}