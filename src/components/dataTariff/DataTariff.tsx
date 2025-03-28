import React, { useState } from 'react';
import OrgUnitTree from './OrgUnitTree';
import AsideDataElements from './AsideDataElements';
import styles from './DataTariff.module.css';

interface OrgUnit {
    id?: string;
    path?: string;
    selected?: string[];
}

const DataTariff: React.FC = () => {
    const [selectedOrgUnit, setSelectedOrgUnit] = useState<OrgUnit | undefined>();

    return (
        <section>
            <h2 className={`${styles.pageTitle}`}>Data Element Tariff and Target Management Page</h2>
            <div className={`${styles.flexContainer}`}>
                <OrgUnitTree orgUnit={selectedOrgUnit} onChange={setSelectedOrgUnit} />
                {selectedOrgUnit && (
                    <AsideDataElements
                        key={selectedOrgUnit.id}
                        selectedOrgUnitId={selectedOrgUnit.id}
                    />
                )}
            </div>
        </section>
    );
};

export default DataTariff;