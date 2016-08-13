# Ionic 2 Smart Tabs
A simple app to demonstrate programmable nav hierarchy within the Ionic 2 Tabs navigation

This is a simple, straightforward Ionic 2 app that I built to demonstrate programmatic nav hierarchy.  The goal of this was to demonstrate:
– Default behavior of a tab navigation
– Programmatically clearing the nav stack within a tab 
- Demonstrate customized Android hardware button functionality

It was meant to answer some questions I received on [a blog post I wrote](https://webcake.co/exploring-nav-hierarchy-in-the-ionic-2-tabs-page/).

## Installation

Pull this repo, and then install NPM packages:
```
$ npm install
```

**Note that there are system configurations and installations you'll have to have completed in order to run Ionic in a simulator on your machine.  You can find instructions in the [Ionic documentation](http://ionicframework.com/docs/v2/).**

Make sure you're configured for whatever platforms on which you might want to run this app:
```
$ ionic add ios
```

Once that's done, you can start the app:
```
$ ionic run ios
```

## Tab Reset Functionality (in iOS)

### Normal Tab:

The Europe tab will maintain the normal navigation flow, so when a user navigates from the first page to the second page, leaving and re-entering the Europe tab will not reset the nav stack.  The user will re-enter at whichever of those pages they last saw activated.

### Reset Tab:

The USA tab will always reset back to the root of the nav stack - that being the state listing.  In order to do this, I handled the <code>ionSelect</code> event on the USA tab, and analyzed its internal <code>_views</code> property.  That functionality can probably be extended to build some deeper navigational programming.  You can find the code that provides that functionality in <code>app/pages/tabs/tabs.ts</code>.  The `showRoot()` method is applied to the USA tab, and will fire wheneer the `ionSelect` event is fired.  **NOTE: this is only accessible because the `nav` property in the USA tab was brought in as a public dependency, not a private dependency.**  

## Android Back Button Functionaliy

By default, Ionic handles the Android back button to always take the user to the previous page in the navigational history.  That means that if the user goes from one tab to another, clicking the back button will take the user back to the first tab.  It can be argued that Android users are more accustomed to the back button taking the up a step in a hierarchy, so in this case a user would expect the back button to take them out of the app rather than to a different tab.

If you check out <code>app/pages/tabs/tabs.ts</code>, you can find the code that makes this work [on line 27](https://github.com/colinjlacy/ionic-2-smart-tabs/blob/master/app/pages/tabs/tabs.ts#L27).  I first look for the tab that's been activated.  That gives me access to the nav stack that the user is currently swimming in.  Once I have that, I can check the length of the `_views` array to determine whether or not the user is on the root of that tab.  If not, I pull them back a step.  If so, then they must be at the Tabs page - the root of my application - and I take them out of the app altogether.
