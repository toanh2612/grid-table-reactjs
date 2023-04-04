// import PagingButton from "./PagingButton";
import PersonListDashboardTable from "./DashboardTable";
import { BaseSyntheticEvent, useState } from "react";
import { Button } from "react-bootstrap";
import { CONSTANT } from "../configs/constant";
import { IHiddenColumns } from "../interfaces/IDashboardTableProps";
import { convertCamelCaseText } from "../utils";

function Dashboard() {
    const [page, setPage] = useState<number>(CONSTANT.PAGE_DEFAULT);
    const [perPage, setPerPage] = useState<number>(CONSTANT.PER_PAGE_LIMIT_DEFAULT);
    const [hiddenColumns, setHiddenColumns] = useState<IHiddenColumns>(CONSTANT.HIDDEN_COLUMNS_DEFAULT);
    const [hiddenColumnsSelectBox, setHiddenColumnsSelectBox] = useState<boolean>(true);
    const handleNextPage = (_page: number) => {
        if (_page > 0) {
            setPage(_page);
        }
    }

    const handleUpdatePerPage = (_perPage: number) => {
        if (_perPage > 0) {
            setPerPage(_perPage);
        }
    }

    const handleUpdateHiddenColumns = (_hiddenColumns: IHiddenColumns) => {
        setHiddenColumns(_hiddenColumns);
    }

    const handlePageOnChange = (e: BaseSyntheticEvent) => {
        handleNextPage(Number(e.target.value));
    }


    const handlePerPageOnChange = (e: BaseSyntheticEvent) => {
        handleUpdatePerPage(Number(e.target.value));
    }

    const handleHiddenColumnsOnChange = (e: BaseSyntheticEvent) => {
        const updateHiddenColumns = { ...hiddenColumns };
        updateHiddenColumns[e.target.id] = !e.target.checked;
        handleUpdateHiddenColumns(updateHiddenColumns);


    }

    const showSelectBox = (e: BaseSyntheticEvent) => {
        const updateHiddenColumnsSelectBox = !hiddenColumnsSelectBox;
        setHiddenColumnsSelectBox(updateHiddenColumnsSelectBox);
    }

    return (
        <div className="Dashboard">
            <div className="PersonListNavBar">
                <Button className="PagingButton" size="sm" variant='dark' onClick={() => {
                    handleNextPage(Number(page - 1))
                }}> Previous page</Button>
                <Button className="PagingButton" size="sm" variant='dark' onClick={() => {
                    handleNextPage(Number(page + 1))
                }}>Next page</Button>

                <label className="PageLabel">
                    Page <input placeholder={page.toString()} className="PageInput" id="pageInput" type="number" value={Number(page)} onChange={handlePageOnChange} />
                </label>
                <label className="PerPageLabel">
                    PerPage <select name="perPage" id="perPage" className="PerPageSelect" value={Number(perPage)} onChange={handlePerPageOnChange}>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                        <option value={200}>200</option>
                        <option value={500}>500</option>
                        <option value={1000}>1000</option>
                        <option value={10000}>10000</option>
                    </select>
                </label>
                <div className="multiselect"  >
                    <div className="selectBox" onClick={showSelectBox}>
                        <p className="selectFields">Select fields</p>
                        {/* <div className="overSelect" hidden={hiddenColumnsSelectBox}
                        ></div> */}
                    </div>
                    <div id="checkboxes" hidden={hiddenColumnsSelectBox}>
                        {Object.keys(hiddenColumns).map((key: string) => {
                            return (
                                <div>
                                    <input type="checkbox" id={key} key={key} onChange={handleHiddenColumnsOnChange} checked={!hiddenColumns[key]} />
                                    <label>{convertCamelCaseText(key)}</label>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
            <PersonListDashboardTable page={page} perPage={perPage} hiddenColumns={hiddenColumns} />
        </div>
    )
}
export default Dashboard;