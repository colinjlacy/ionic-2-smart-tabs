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
];