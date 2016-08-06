/**
 * Created by colinjlacy on 8/6/16.
 */
import { BandListModel, SongListModel } from './data.models';

export const BANDS: BandListModel = [
	{
		id: 'pearl-jam',
		name: 'Pearl Jam'
	},
	{
		id: 'nirvana',
		name: 'Nirvana'
	},
	{
		id: 'soundgarden',
		name: 'Soundgarden'
	}
];

export const SONGS: SongListModel = [
	{
		id: 0,
		name: 'Smells Like Teen Spirit',
		band: 'nirvana'
	},
	{
		id: 1,
		name: 'Lithium',
		band: 'nirvana'
	},
	{
		id: 2,
		name: 'Heart-Shaped Box',
		band: 'nirvana'
	},
	{
		id: 3,
		name: 'Strawman',
		band: 'soundgarden'
	},
	{
		id: 4,
		name: 'Fell on Black Days',
		band: 'soundgarden'
	},
	{
		id: 5,
		name: 'Black Hole Sun',
		band: 'soundgarden'
	},
	{
		id: 6,
		name: 'Jeremy',
		band: 'pearl-jam'
	},
	{
		id: 7,
		name: 'Better Man',
		band: 'pearl-jam'
	},
	{
		id: 8,
		name: 'Light Years',
		band: 'pearl-jam'
	}
];