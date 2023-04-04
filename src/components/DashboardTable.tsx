import React, { useEffect, useState } from "react";
import { CONSTANT } from "../configs/constant";
import { IPerson } from "../interfaces/IPerson.interface";
import Table from "react-bootstrap/Table";
import getPersonList from "../callApis/getPersonList";
import IDashboardTableOptions, { IHiddenColumns } from "../interfaces/IDashboardTableProps";
function PersonListDashboardTable(dashboardTableProps: IDashboardTableOptions) {

	const page: number = dashboardTableProps.page || CONSTANT.PAGE_DEFAULT;
	const perPage: number = dashboardTableProps.perPage || CONSTANT.PER_PAGE_LIMIT_DEFAULT;
	const hiddenColumns: IHiddenColumns = dashboardTableProps.hiddenColumns || CONSTANT.HIDDEN_COLUMNS_DEFAULT;
	const [personList, setPersonList] = useState<IPerson[]>([]);
	const [currentPersonIndex, setcurrentPersonIndex] = useState<number>(0);

	useEffect(() => {
		let updatePersonList: IPerson[] = [];
		const fetchApi = async () => {
			updatePersonList = await getPersonList(page, perPage);
		}
		fetchApi().then(() => {
			setPersonList(updatePersonList);
		});
	}, [page, perPage]);

	const handlePersonRowOnClick = (personIndex: number) => {
		setcurrentPersonIndex(personIndex);
		scroll(String(personIndex));

	}

	const scroll = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}

	};

	const onMoveKey = (e: any) => {
		let newPersonIndex: number = 0;
		if (e.key === "ArrowDown") {
			newPersonIndex = currentPersonIndex + 1;
		}

		if (e.key === "ArrowUp") {
			newPersonIndex = currentPersonIndex - 1;
		}
		setcurrentPersonIndex(newPersonIndex);
		scroll(String(newPersonIndex));
	}

	return (
		<Table striped bordered hover variant="dark" responsive="sm" onKeyDown={onMoveKey} tabIndex={0} >
			<thead>
				<tr>
					<th className="PersonThTable" >#</th>
					<th className="PersonThTable" hidden={hiddenColumns.firstName}>First name</th>
					<th className="PersonThTable" hidden={hiddenColumns.lastName}>Last name</th>
					<th className="PersonThTable" hidden={hiddenColumns.age}>Age</th>
					<th className="PersonThTable" hidden={hiddenColumns.email}>Email</th>
					<th className="PersonThTable" hidden={hiddenColumns.phoneNumber}>Phone number</th>
					<th className="PersonThTable" hidden={hiddenColumns.address}>Address</th>
					<th className="PersonThTable" hidden={hiddenColumns.city}>City</th>
					<th className="PersonThTable" hidden={hiddenColumns.state}>State</th>
					<th className="PersonThTable" hidden={hiddenColumns.zipCode}>Zip code</th>
					<th className="PersonThTable" hidden={hiddenColumns.jobTitle}>Job title</th>
					<th className="PersonThTable" hidden={hiddenColumns.company}>Company</th>
					<th className="PersonThTable" hidden={hiddenColumns.website}>Website</th>
					<th className="PersonThTable" hidden={hiddenColumns.username}>Username</th>
					<th className="PersonThTable" hidden={hiddenColumns.password}>Password</th>
					<th className="PersonThTable" hidden={hiddenColumns.creditCardNumber}>Credit card number</th>
					<th className="PersonThTable" hidden={hiddenColumns.creditCardIssuer}>Credit card issuer</th>
					<th className="PersonThTable" hidden={hiddenColumns.expirationDate}>Expiration date</th>
					<th className="PersonThTable" hidden={hiddenColumns.cvv}>CVV</th>
					<th className="PersonThTable" hidden={hiddenColumns.bankAccountNumber}>Bank account number</th>
					<th className="PersonThTable" hidden={hiddenColumns.routingNumber}>Routing number</th>
					<th className="PersonThTable" hidden={hiddenColumns.favoriteColor}>Favorite color</th>
					<th className="PersonThTable" hidden={hiddenColumns.favoriteFood}>Favorite food</th>
					<th className="PersonThTable" hidden={hiddenColumns.favoriteMovie}>Favorite movie</th>
					<th className="PersonThTable" hidden={hiddenColumns.favoriteBook}>Favorite book</th>
					<th className="PersonThTable" hidden={hiddenColumns.favoriteSong}>Favorite song</th>
					<th className="PersonThTable" hidden={hiddenColumns.favoriteSport}>Favorite sport</th>
					<th className="PersonThTable" hidden={hiddenColumns.favoriteAnimal}>Favorite animal</th>
					<th className="PersonThTable" hidden={hiddenColumns.favoriteQuote}>Favorite quote</th>
					<th className="PersonThTable" hidden={hiddenColumns.aboutMe}>About me</th>
					<th className="PersonThTable" hidden={hiddenColumns.hobbies}>Hobbies</th>
				</tr>
			</thead>
			<tbody>
				{personList.map((person, index) => (
					<tr id={String(index + 1)} className={index + 1 === currentPersonIndex ? "PersonRowActived" : ""} key={index + 1} onClick={() => {
						handlePersonRowOnClick(index + 1)
					}} >
						<td className={index + 1 === currentPersonIndex ? "PersonRowActived" : ""}>{(perPage * (page - 1)) + index + 1}</td>
						<td hidden={hiddenColumns.firstName}>{person.firstName}</td>
						<td hidden={hiddenColumns.lastName}>{person.lastName}</td>
						<td hidden={hiddenColumns.age}>{person.age}</td>
						<td hidden={hiddenColumns.email}>{person.email}</td>
						<td hidden={hiddenColumns.phoneNumber}>{person.phoneNumber}</td>
						<td hidden={hiddenColumns.address}>{person.address}</td>
						<td hidden={hiddenColumns.city}>{person.city}</td>
						<td hidden={hiddenColumns.state}>{person.state}</td>
						<td hidden={hiddenColumns.zipCode}>{person.zipCode}</td>
						<td hidden={hiddenColumns.jobTitle}>{person.jobTitle}</td>
						<td hidden={hiddenColumns.company}>{person.company}</td>
						<td hidden={hiddenColumns.website}>{person.website}</td>
						<td hidden={hiddenColumns.username}>{person.username}</td>
						<td hidden={hiddenColumns.password}>{person.password}</td>
						<td hidden={hiddenColumns.creditCardNumber}>{person.creditCardNumber}</td>
						<td hidden={hiddenColumns.creditCardIssuer}>{person.creditCardIssuer}</td>
						<td hidden={hiddenColumns.expirationDate}>{person.expirationDate}</td>
						<td hidden={hiddenColumns.cvv}>{person.cvv}</td>
						<td hidden={hiddenColumns.bankAccountNumber}>{person.bankAccountNumber}</td>
						<td hidden={hiddenColumns.routingNumber}>{person.routingNumber}</td>
						<td hidden={hiddenColumns.favoriteColor}>{person.favoriteColor}</td>
						<td hidden={hiddenColumns.favoriteFood}>{person.favoriteFood}</td>
						<td hidden={hiddenColumns.favoriteMovie}>{person.favoriteMovie}</td>
						<td hidden={hiddenColumns.favoriteBook}>{person.favoriteBook}</td>
						<td hidden={hiddenColumns.favoriteSong}>{person.favoriteSong}</td>
						<td hidden={hiddenColumns.favoriteSport}>{person.favoriteSport}</td>
						<td hidden={hiddenColumns.favoriteAnimal}>{person.favoriteAnimal}</td>
						<td hidden={hiddenColumns.favoriteQuote}>{person.favoriteQuote}</td>
						<td hidden={hiddenColumns.aboutMe}>{"xß" || person.aboutMe}</td>
						<td hidden={hiddenColumns.hobbies}>{person.hobbies}</td>
					</tr>
				))}
			</tbody>
		</Table>

	)
}

export default React.memo(PersonListDashboardTable);