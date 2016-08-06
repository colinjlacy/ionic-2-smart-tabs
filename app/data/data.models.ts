/**
 * Created by colinjlacy on 8/6/16.
 */
export interface BandModel {
	id: string,
	name: string
}

declare type BandListModel = BandModel[];

export interface SongModel {
	id: number,
	name: string,
	band: string
}

declare type SongListModel = SongModel[];