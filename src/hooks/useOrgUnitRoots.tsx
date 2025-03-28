import { useDataQuery } from "@dhis2/app-runtime";

const orgUnitQuerry = {
    roots: {
        resource: "organisationUnits",
        params: () => ({
            fields: ["id", "displayName~rename(name)", "path"],
            userDataViewFallback: true,
        }),
    },
};

const useOrgUnitRoots = () => {
    const { loading, error, data } = useDataQuery(orgUnitQuerry);


    return {
        roots: data?.roots?.organisationUnits,
        error,
        loading,
    };
};

export default useOrgUnitRoots;