import MainLayout from './layout/MainLayout';
import {
    HomePage,
    NotFoundPage,
    PBFSetupPage,
    PBFDataEntryPage,
    QualityScoreEntryPage,
    QualitymaxscorePage,
    DataElementTariffandTargetManagementPage,
    SearchDataElementTariffandTargetManagementPage,
    BankDetailsManagementPage,
    QualityScorePaymentPage,
    LookupPage,
    PaymentAdjustmentPage
} from './pages';
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.module.css';



const App: React.FC = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/pbfsetup" element={<PBFSetupPage />} />
                    <Route path="/pbfdataentry" element={<PBFDataEntryPage />} />
                    <Route path="/qualityscoreentry" element={<QualityScoreEntryPage />} />
                    <Route path="/qualitymaxscore" element={<QualitymaxscorePage />} />
                    <Route path="/dataelementtariffandtargetmanagement" element={<DataElementTariffandTargetManagementPage />} />
                    <Route path="/searchdataelementtariffandtargetmanagement" element={<SearchDataElementTariffandTargetManagementPage />} />
                    <Route path="/bankdetailsmanagement" element={<BankDetailsManagementPage />} />
                    <Route path="/qualityscorepayment" element={<QualityScorePaymentPage />} />
                    <Route path="/lookup" element={<LookupPage />} />
                    <Route path="/paymentadjustment" element={<PaymentAdjustmentPage />} />;
                </Route >
            </>
        )
    );



    return (
        <RouterProvider router={router} />
        // <Home />
    );
};

export default App;
