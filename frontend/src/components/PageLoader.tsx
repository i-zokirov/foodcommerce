import { useAppSelector } from "@/redux/hooks";
import React, { useEffect } from "react";

const PageLoader = () => {
    const { isLoading } = useAppSelector((state) => state.pageLoader);
    return (
        <div
            className="page-loader"
            style={{ display: isLoading ? "block" : "none" }}
        >
            <div className="wrapper">
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="shadow" />
                <div className="shadow" />
                <div className="shadow" />
                <span>Loading</span>
            </div>
        </div>
    );
};

export default PageLoader;
