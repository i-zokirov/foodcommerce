import React from "react";

const PageLoader = () => {
    return (
        <div className="page-loader" style={{ display: "none" }}>
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
