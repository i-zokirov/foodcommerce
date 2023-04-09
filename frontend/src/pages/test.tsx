import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center image-col">
                    <img
                        src="https://via.placeholder.com/500x500.png"
                        alt="Login"
                        className="img-fluid"
                    />
                </div>
                <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center form-col">
                    <div className="form-wrapper p-5">
                        <h2>Login</h2>
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
                                className="btn btn-primary w-100"
                            >
                                Login
                            </button>
                        </form>
                        <div className="social-buttons mt-3">
                            <button
                                type="button"
                                className="btn btn-outline-primary me-2"
                            >
                                Continue with Google
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-primary"
                            >
                                Continue with Telegram
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
