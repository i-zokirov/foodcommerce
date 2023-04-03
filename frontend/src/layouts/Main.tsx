import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
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
            <main>{children}</main>
            <Footer />
        </React.Fragment>
    );
};

export default Main;
