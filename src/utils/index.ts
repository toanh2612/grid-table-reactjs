import { IPerson } from "../interfaces/IPerson.interface";

export const getOfflineData = (
	jsonFilePath: string,
	perPage: number,
	page: number
): IPerson[] => {
	try {
		const dataArray: IPerson[] = require(jsonFilePath);
		const startIndex = (page - 1) * perPage;
		const endIndex = page * perPage;

		return [...dataArray.slice(startIndex, endIndex)];
	} catch (e) {
		return [];
	}
};

export const convertCamelCaseText = (text: string) => {
	const result = text.replace(/([A-Z])/g, " $1");
	return result.charAt(0).toUpperCase() + result.slice(1) || text;
};
