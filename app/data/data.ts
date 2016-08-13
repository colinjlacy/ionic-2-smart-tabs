/**
 * Created by colinjlacy on 8/6/16.
 */
import { SourceListModel, SongListModel } from './data.models';

export const SOURCES: SourceListModel = [
	{
		id: 'new-york',
		name: 'New York',
		type: 'usa'
	},
	{
		id: 'massachusetts',
		name: 'Massachusetts',
		type: 'usa'
	},
	{
		id: 'louisiana',
		name: 'Louisiana',
		type: 'usa'
	},
	{
		id: 'france',
		name: 'France',
		type: 'europe'
	},
	{
		id: 'spain',
		name: 'Spain',
		type: 'europe'
	},
	{
		id: 'england',
		name: 'England',
		type: 'europe'
	}
];

export const SONGS: SongListModel = [
	{
		id: 0,
		name: 'Albany',
		source: 'new-york'
	},
	{
		id: 1,
		name: 'New York',
		source: 'new-york'
	},
	{
		id: 2,
		name: 'Schenectady',
		source: 'new-york'
	},
	{
		id: 3,
		name: 'Boston',
		source: 'massachusetts'
	},
	{
		id: 4,
		name: 'Worcester',
		source: 'massachusetts'
	},
	{
		id: 5,
		name: 'Lowell',
		source: 'massachusetts'
	},
	{
		id: 6,
		name: 'Baton Rouge',
		source: 'louisiana'
	},
	{
		id: 7,
		name: 'New Orleans',
		source: 'louisiana'
	},
	{
		id: 8,
		name: 'Lafayette',
		source: 'louisiana'
	},
	{
		id: 9,
		name: 'Madrid',
		source: 'spain'
	},
	{
		id: 10,
		name: 'Barcelona',
		source: 'spain'
	},
	{
		id: 11,
		name: 'Paris',
		source: 'france'
	},
	{
		id: 12,
		name: 'Nice',
		source: 'france'
	},
	{
		id: 13,
		name: 'London',
		source: 'england'
	},
	{
		id: 14,
		name: 'Hastings',
		source: 'england'
	}
];