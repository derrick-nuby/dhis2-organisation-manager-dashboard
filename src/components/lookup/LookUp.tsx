import React, { useState } from 'react';
import { Button, InputField, IconAdd16 } from '@dhis2/ui';
import { useDataMutation, useDataQuery } from '@dhis2/app-runtime';
import CustomModal from '../ui/CustomModal';
import ItemsLookUpTable from './ItemsLookUpTable';
import styles from './LookUp.module.css';
import customNumber from './../../utils/dateTimeLetter';

const addStoreMutation = {
    resource: `dataStore/lookup/${customNumber}`,
    type: 'create',
    data: ({ type, mainName, code, value, description }) => ({
        type,
        mainName,
        code,
        value,
        description,
    }),
};

const LookUp: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [type, setType] = useState('');
    const [mainName, setMainName] = useState('');
    const [code, setCode] = useState('');
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [refetchTrigger, setRefetchTrigger] = useState(0);

    const [addMutate] = useDataMutation(addStoreMutation, {
        onComplete: () => {
            setShowModal(false);
            setType('');
            setMainName('');
            setCode('');
            setValue('');
            setDescription('');
        }
    });

    const handleAddLookup = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSaveChanges = async () => {

        try {
            await addMutate({
                type,
                mainName,
                code,
                value,
                description,
            });
            setRefetchTrigger(prev => prev + 1);
        } catch (err) {
            console.error('Error adding lookup:', err);
        }
    };

    return (
        <div>
            <nav className={styles.pageHeader}>
                <h2 className={styles.pageTitle}>Lookup Management</h2>
                <Button primary onClick={handleAddLookup}>
                    <IconAdd16 /> Add Lookup
                </Button>
            </nav>
            <ItemsLookUpTable refetchTrigger={refetchTrigger} />
            <CustomModal
                isOpen={showModal}
                onClose={handleCloseModal}
                title="Add Lookup"
                onSave={handleSaveChanges}
            >
                <InputField
                    label="TYPE"
                    required
                    value={type}
                    onChange={({ value }) => setType(value)}
                    inputWidth="320px"
                />
                <InputField
                    label="NAME"
                    required
                    value={mainName}
                    onChange={({ value }) => setMainName(value)}
                    inputWidth="320px"
                />
                <InputField
                    label="CODE"
                    required
                    value={code}
                    onChange={({ value }) => setCode(value)}
                    inputWidth="320px"
                />
                <InputField
                    label="VALUE"
                    required
                    value={value}
                    onChange={({ value }) => setValue(value)}
                    inputWidth="320px"
                />
                <InputField
                    label="DESCRIPTION"
                    required
                    value={description}
                    onChange={({ value }) => setDescription(value)}
                    inputWidth="320px"
                />
            </CustomModal>
        </div>
    );
};

export default LookUp;
