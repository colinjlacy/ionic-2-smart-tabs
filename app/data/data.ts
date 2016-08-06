/**
 * Created by colinjlacy on 8/6/16.
 */
import { SourceListModel, SongListModel } from './data.models';

export const SOURCES: SourceListModel = [
	{
		id: 'pearl-jam',
		name: 'Pearl Jam',
		type: 'band'
	},
	{
		id: 'nirvana',
		name: 'Nirvana',
		type: 'band'
	},
	{
		id: 'soundgarden',
		name: 'Soundgarden',
		type: 'band'
	},
	{
		id: 'blow',
		name: 'Blow',
		type: 'movie'
	},
	{
		id: 'slap-shot',
		name: 'Slap Shot',
		type: 'movie'
	},
	{
		id: 'trainspotting',
		name: 'Trainspotting',
		type: 'movie'
	}
];

export const SONGS: SongListModel = [
	{
		id: 0,
		name: 'Smells Like Teen Spirit',
		source: 'nirvana'
	},
	{
		id: 1,
		name: 'Lithium',
		source: 'nirvana'
	},
	{
		id: 2,
		name: 'Heart-Shaped Box',
		source: 'nirvana'
	},
	{
		id: 3,
		name: 'Strawman',
		source: 'soundgarden'
	},
	{
		id: 4,
		name: 'Fell on Black Days',
		source: 'soundgarden'
	},
	{
		id: 5,
		name: 'Black Hole Sun',
		source: 'soundgarden'
	},
	{
		id: 6,
		name: 'Jeremy',
		source: 'pearl-jam'
	},
	{
		id: 7,
		name: 'Better Man',
		source: 'pearl-jam'
	},
	{
		id: 8,
		name: 'Light Years',
		source: 'pearl-jam'
	},
	{
		id: 9,
		name: 'Black Betty',
		source: 'blow'
	},
	{
		id: 10,
		name: 'Blinded by the Light',
		source: 'blow'
	},
	{
		id: 11,
		name: 'Can\'t You See',
		source: 'blow'
	},
	{
		id: 12,
		name: 'Right Back Where We Started From',
		source: 'slap-shot'
	},
	{
		id: 13,
		name: 'The Passeger',
		source: 'trainspotting'
	},
	{
		id: 14,
		name: 'Golden Years',
		source: 'trainspotting'
	}
];