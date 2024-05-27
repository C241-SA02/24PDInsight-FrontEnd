import React from "react";
import { column } from "./index";
import TableContainer from "Common/TableContainer";
import { historyTableData } from "Common/data";
import { Link } from "react-router-dom";

const RowBorders = () => {

    const columns: column[] = React.useMemo(
        () => [
            {
                header: 'Date',
                accessorKey: 'Date',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'Category',
                accessorKey: 'category',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'Filename / Link',
                accessorKey: 'link',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Detail",
                accessorKey: "detail",
                enableColumnFilter: false,
                enableSorting: true,
                 cell: (cell: any) => (
                    <Link to="#!" data-modal-target="addOrderModal" type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                         <span className="align-middle">Detail</span>
                                    </Link>
                 )
            }
        ],
        []
    );

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <TableContainer
                        isPagination={true}
                        isSelect={true}
                        isGlobalFilter={true}
                        columns={(columns || [])}
                        data={(historyTableData || [])}
                        customPageSize={10}
                        divclassName="my-2 col-span-12 overflow-x-auto lg:col-span-12"
                        tableclassName="dataTable w-full text-sm align-middle whitespace-nowrap no-footer"
                        theadclassName="border-b border-slate-200 dark:border-zink-500"
                        tbodyclassName="divide-y divide-slate-200 dark:divide-zink-500"
                        thclassName="p-3 group-[.bordered]:border group-[.bordered]:border-slate-200 group-[.bordered]:dark:border-zink-500 sorting px-3 py-4 text-slate-900 bg-slate-200/50 font-semibold text-left dark:text-zink-50 dark:bg-zink-600 dark:group-[.bordered]:border-zink-500 sorting_asc"
                        tdclassName="p-3 group-[.bordered]:border group-[.bordered]:border-slate-200 group-[.bordered]:dark:border-zink-500"
                        PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default RowBorders;