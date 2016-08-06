import { Component, ViewChild } from '@angular/core'
import { Tab, Tabs, NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { MoviesPage } from '../movies/movies';

@Component({
	templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

	@ViewChild('homeTab') tabRef: Tab;

	private tab1Root: any;
	private tab2Root: any;
	private tab3Root: any;

	constructor(private nav: NavController) {
		// this tells the tabs component which Pages
		// should be each tab's root Page
		this.tab1Root = HomePage;
		this.tab2Root = AboutPage;
		this.tab3Root = MoviesPage;
	}

	showRoot() {
		console.log('checking tab views');
		let views = this.tabRef['_views'];
		if(views.length > 1) {
			views[views.length - 1].instance.nav.popToRoot({animate: false});
		}
	}
}
