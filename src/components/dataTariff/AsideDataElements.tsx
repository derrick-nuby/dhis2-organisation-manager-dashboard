import React from 'react';
import { useDataQuery } from '@dhis2/app-runtime';
import { CircularLoader, DataTable, TableHead, DataTableRow, DataTableColumnHeader, TableBody, DataTableCell } from '@dhis2/ui';

interface AsideDataElementsProps {
    selectedOrgUnitId: string | undefined;
}

const AsideDataElements: React.FC<AsideDataElementsProps> = ({ selectedOrgUnitId }) => {
    const query = {
        dataSets: {
            resource: `organisationUnits/${selectedOrgUnitId}/dataSets`,
            params: {
                fields: ["displayName", "code", "name", "shortName", "periodType"],
            },
        },
    };

    const { loading, error, data } = useDataQuery(query);

    if (loading) return <CircularLoader />;
    if (error) return <span>{`ERROR: ${error.message}`}</span>;

    const datasets = data?.dataSets?.dataSets || [];

    return (
        <div>
            {datasets.length === 0 ? (
                <span>No dataset available for the selected organisation Unit</span>
            ) : (
                <DataTable>
                    <TableHead>
                        <DataTableRow>
                            <DataTableColumnHeader>No.</DataTableColumnHeader>
                            <DataTableColumnHeader>Display Name</DataTableColumnHeader>
                            <DataTableColumnHeader>Code</DataTableColumnHeader>
                            <DataTableColumnHeader>Period Type</DataTableColumnHeader>
                            <DataTableColumnHeader>Short Name</DataTableColumnHeader>
                        </DataTableRow>
                    </TableHead>
                    <TableBody>
                        {datasets.map((dataset, index) => (
                            <DataTableRow key={dataset.id}>
                                <DataTableCell>{index + 1}</DataTableCell>
                                <DataTableCell>{dataset.displayName}</DataTableCell>
                                <DataTableCell>{dataset.code}</DataTableCell>
                                <DataTableCell>{dataset.periodType}</DataTableCell>
                                <DataTableCell>{dataset.shortName}</DataTableCell>
                            </DataTableRow>
                        ))}
                    </TableBody>
                </DataTable>
            )}
        </div>
    );
};

export default AsideDataElements;