export interface IHiddenColumns {
	[key: string]: boolean;
}
export default interface IDashboardTableOptions {
	perPage?: number;
	page?: number;
	hiddenColumns?: IHiddenColumns;
}
