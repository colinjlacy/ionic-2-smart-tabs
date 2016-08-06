/**
 * Created by colinjlacy on 8/6/16.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	template: `
	<ion-list inset>
		<ion-item *ngFor="let item of items" (click)="navToPage(item)">
			{{item.title}}
		</ion-item>
	</ion-list>
	`,

})
export class BandsListing {
	public bands: Object[];

	constructor(private nav: NavController) {}
}