/**
 * Created by colinjlacy on 8/6/16.
 */
export interface SourceModel {
	id: string,
	name: string,
	type: string
}

export type SourceListModel = SourceModel[];

export interface SongModel {
	id: number,
	name: string,
	source: string
}

export type SongListModel = SongModel[];