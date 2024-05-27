import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import RowBorders from "./RowBorders";

export interface column { header: string; accessorKey: string; enableColumnFilter: boolean; enableSorting: boolean };

const HistoryTable = () => {

    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Datatable" pageTitle="History" />
                <RowBorders />
            </div>
        </React.Fragment>
    );
}

export default HistoryTable;