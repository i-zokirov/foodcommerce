import React from "react";
import Main from "@/layouts/Main";
import Meta from "@/layouts/Meta";
const Page404 = () => {
    return (
        <Main meta={<Meta title="" description="" />}>
            <section className="error-section">
                <div className="container">
                    <div className="error-page">
                        <form
                            data-aos="flip-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter query keywords"
                            />
                            <button className="button button-2">
                                <i className="fa-solid fa-magnifying-glass" />
                            </button>
                        </form>
                        <img
                            alt="girl"
                            src="https://via.placeholder.com/440x532"
                            data-aos="flip-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        />
                        <h2>404</h2>
                        <h4
                            data-aos="flip-up"
                            data-aos-delay={400}
                            data-aos-duration={500}
                        >
                            Sorry, we were unuble to find that page
                        </h4>
                        <p
                            data-aos="flip-up"
                            data-aos-delay={600}
                            data-aos-duration={700}
                        >
                            Varius sit amet mattis vulputate enim nulla aliquet
                            porttitor.
                            <br /> Elementum nibh tellus molestie nunc.
                        </p>
                        <a href="index.html">
                            <i className="fa-solid fa-house" />
                        </a>
                    </div>
                </div>
            </section>
        </Main>
    );
};

export default Page404;
