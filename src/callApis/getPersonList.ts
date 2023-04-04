import axios from "axios";
import { CONSTANT } from "../configs/constant";
import { IPerson } from "../interfaces/IPerson.interface";
import { getOfflineData } from "../utils";

const getPersonList = (page: number, perPage: number) => {
	return new Promise<IPerson[]>((resolve, reject) => {
		try {
			axios({
				baseURL: CONSTANT.API_END_POINT,
				params: {
					_page: page,
					_limit: perPage,
				},
				timeout: CONSTANT.TIMEOUT_DEFAULT,
			})
				.then((response) => {
					return resolve(response.data);
				})
				.catch((error) => {
					return resolve(
						getOfflineData(
							CONSTANT.JSON_DATA_FILE,
							CONSTANT.PER_PAGE_LIMIT_DEFAULT,
							CONSTANT.PAGE_DEFAULT
						)
					);
				});
		} catch (error: any) {
			return reject(error);
		}
	});
};

export default getPersonList;
