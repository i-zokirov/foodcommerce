import Link from "next/link";
import React, { useEffect } from "react";

const login = () => {
    return (
        <section
            className="login-page"
            style={{
                backgroundImage: "url(assets/img/background-1.png)",
                position: "relative",
            }}
        >
            <div className="row">
                <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center image-col"></div>
                <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center form-col">
                    <div className="form-wrapper p-5">
                        <h4>Sign in </h4>
                        <form>
                            <div className="mb-3">
                                <label
                                    htmlFor="email"
                                    className="form-label text-start"
                                >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />
                                <div className="invalid-feedback text-end">
                                    Please enter a valid email address.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="password"
                                    className="form-label text-start"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                />
                                <div className="invalid-feedback text-end">
                                    Please enter a valid password.
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="button button-contained"
                            >
                                Login
                            </button>
                            <div className="mt-3">
                                <span>
                                    Not registered?{" "}
                                    <Link href={"/sign-up"}>Sign up here</Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default login;
