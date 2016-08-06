# Ionic 2 Smart Tabs
A simple app to demonstrate programmable nav hierarchy within the Ionic 2 Tabs navigation

This is a simple, straightforward Ionic 2 app that I built to demonstrate programmatic nav hierarchy.  The goal of this was to demonstrate:
– Default behavior of a tab navigation
– Programmatically clearing the nav stack within a tab 

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

## Functionality

### Normal Tab:

The Movies tab will maintain the normal navigation flow, so when a user navigates from the first page to the second page, leaving and re-entering the Movies tab will not reset the nav stack.  The user will re-enter at whichever of those pages they last saw activated.

### Reset Tab:

The Bands tab will always reset back to the root of the nav stack - that being the band listing.  In order to do this, I handled the <code>ionSelect</code> event on the Bands tab, and analyzed its internal <code>_views</code> property.  That functionality can probably be extended to build some deeper navigational programming.  You can find the code that provides that functionality in <code>app/pages/tabs/tabs.ts</code>.
