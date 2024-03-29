import Link from "next/link";
import React from "react";

const signup = () => {
    return (
        <section
            className="register-page"
            style={{
                backgroundImage: "url(assets/img/background-1.png)",
                position: "relative",
            }}
        >
            <div className="row">
                <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center image-col"></div>
                <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center form-col">
                    <div className="form-wrapper p-5">
                        <h4>Sign Up</h4>
                        <form>
                            <div className="mb-3">
                                <label
                                    htmlFor="name"
                                    className="form-label text-start"
                                >
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter your name"
                                />
                            </div>
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
                                Sign Up
                            </button>
                            <div className="mt-3">
                                <span>
                                    Already have an account?{" "}
                                    <Link href={"/login"}>Sign in here</Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default signup;
