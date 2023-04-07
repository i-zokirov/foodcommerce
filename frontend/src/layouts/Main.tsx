import PageLoader from "@/components/PageLoader";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import type { ReactNode } from "react";

type IMainProps = {
    meta: ReactNode;
    children: ReactNode;
};

const Main: React.FC<IMainProps> = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <PageLoader />
            <main>{children}</main>
            <Footer />
        </React.Fragment>
    );
};

export default Main;
