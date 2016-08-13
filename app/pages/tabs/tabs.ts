import { Component, ViewChild } from '@angular/core'
import { Tab, Tabs, NavController, Platform } from 'ionic-angular';

import { UsaPage } from '../usa/usa';
import { AboutPage } from '../about/about';
import { EuropePage } from '../europe/europe';

@Component({
	templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

	@ViewChild('homeTab') tabRef: Tab;
	@ViewChild('tabs') tabs: Tabs;

	private tab1Root: any;
	private tab2Root: any;
	private tab3Root: any;

	constructor(private nav: NavController, private platform: Platform) {
		// this tells the tabs component which Pages
		// should be each tab's root Page
		this.tab1Root = UsaPage;
		this.tab2Root = AboutPage;
		this.tab3Root = EuropePage;

		this.platform.registerBackButtonAction(() => {
			let child: Tab = this.tabs.getSelected();
			if(child['_views'].length > 1) {
				child.pop();
			} else {
				navigator['app'].exitApp();
			}
		});
	}

	showRoot() {
		let views = this.tabRef['_views'];
		if(views.length > 1) {
			views[views.length - 1].instance.nav.popToRoot({animate: false});
		}
	}
}
