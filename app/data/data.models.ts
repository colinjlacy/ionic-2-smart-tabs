/**
 * Created by colinjlacy on 8/6/16.
 */
export interface BandModel {
	id: string,
	name: string
}

export type BandListModel = BandModel[];

export interface SongModel {
	id: number,
	name: string,
	band: string
}

export type SongListModel = SongModel[];