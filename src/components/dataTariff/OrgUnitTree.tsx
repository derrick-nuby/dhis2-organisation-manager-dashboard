import i18n from "@dhis2/d2-i18n";
import { useEffect } from "react";
import { OrganisationUnitTree } from "@dhis2/ui";
import useOrgUnitRoots from "../../hooks/useOrgUnitRoots";

interface OrgUnit {
    id?: string;
    path?: string;
    selected?: string[];
}

interface OrgUnitTreeProps {
    orgUnit?: OrgUnit;
    onChange: (orgUnit: OrgUnit) => void;
}

const OrgUnitTree: React.FC<OrgUnitTreeProps> = ({ orgUnit, onChange }) => {
    const { roots, error } = useOrgUnitRoots();

    useEffect(() => {
        if (roots && !orgUnit && typeof onChange === 'function') {
            const [root] = roots;
            onChange({ ...root, selected: [root.path] });
        }
    }, [roots, orgUnit, onChange]);

    return roots ? (
        <div>
            <OrganisationUnitTree
                roots={roots.map((r) => r.id)}
                selected={orgUnit?.selected}
                singleSelection={true}
                initiallyExpanded={roots.map((r) => r.path)}
                onChange={(selectedOrgUnits) => {
                    if (typeof onChange === 'function') {
                        onChange({ id: selectedOrgUnits.id, selected: [selectedOrgUnits.path] });
                    }
                }}
            />
        </div>
    ) : error ? (
        <div>{error.message}</div>
    ) : null;
};

export default OrgUnitTree;
