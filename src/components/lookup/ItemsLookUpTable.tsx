import React, { useEffect } from 'react';
import { DataTable, TableHead, DataTableRow, DataTableColumnHeader, TableBody, DataTableCell, Button } from '@dhis2/ui';
import { useDataQuery, useDataMutation } from '@dhis2/app-runtime';
import { Pagination, CircularLoader } from '@dhis2/ui';

const query = {
    dataStore: {
        resource: 'dataStore/lookup',
        params: () => ({
            fields: '.',
        }),
    },
};

const deleteMutation = {
    resource: 'dataStore/lookup',
    id: ({ id }) => id,
    type: 'delete',
};

interface ItemsLookUpTableProps {
    refetchTrigger: number;
}


const ItemsLookUpTable: React.FC<ItemsLookUpTableProps> = ({ refetchTrigger }) => {
    const { loading, error, data, refetch } = useDataQuery(query);
    const [deleteLookup, { loading: deleting }] = useDataMutation(deleteMutation, {
        onComplete: () => {
            refetch();
        },
        onError: (error) => {
            console.error('Error deleting lookup:', error);
        },
    });

    useEffect(() => {
        refetch();
    }, [refetchTrigger, refetch]);


    const handleEditLookup = () => {
        console.log("handleEditLookup");
    };

    const handleDeleteLookup = (key) => {
        deleteLookup({ id: key });
    };

    return (
        <div>
            <DataTable>
                <TableHead>
                    <DataTableRow>
                        <DataTableColumnHeader>TYPE</DataTableColumnHeader>
                        <DataTableColumnHeader>NAME</DataTableColumnHeader>
                        <DataTableColumnHeader>CODE</DataTableColumnHeader>
                        <DataTableColumnHeader>VALUE</DataTableColumnHeader>
                        <DataTableColumnHeader>DESCRIPTION</DataTableColumnHeader>
                        <DataTableColumnHeader>ACTIONS</DataTableColumnHeader>
                    </DataTableRow>
                </TableHead>
                <TableBody>
                    {loading || deleting ? <CircularLoader /> : (
                        data.dataStore.entries.map((element) => (
                            <DataTableRow key={element.key}>
                                <DataTableCell>{element.value.type}</DataTableCell>
                                <DataTableCell>{element.value.mainName}</DataTableCell>
                                <DataTableCell>{element.value.code}</DataTableCell>
                                <DataTableCell>{element.value.value}</DataTableCell>
                                <DataTableCell>{element.value.description}</DataTableCell>
                                <DataTableCell>
                                    <Button primary className='small' onClick={() => handleEditLookup(element.key)}>Edit</Button>
                                    <Button destructive className='small' onClick={() => handleDeleteLookup(element.key)}>Delete</Button>
                                </DataTableCell>
                            </DataTableRow>
                        ))
                    )}
                </TableBody>
            </DataTable>
        </div>
    );
};

export default ItemsLookUpTable;
