import React from "react";

const Search = () => {
    return (
        <form
            data-aos="flip-up"
            data-aos-delay={200}
            data-aos-duration={300}
            className="search-form"
            style={{ marginTop: "1rem" }}
        >
            <input
                className="search-bar-input"
                type="text"
                name="email"
                placeholder="Enter your street address"
            />

            <button className="button button-contained search-bar-btn">
                <i className="fa-solid fa-magnifying-glass" />
            </button>
        </form>
    );
};

export default Search;
