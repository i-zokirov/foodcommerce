import React from "react";
import Main from "@/layouts/Main";
import Meta from "@/layouts/Meta";
const faq = () => {
    return (
        <Main meta={<Meta title="" description="" />}>
            <section className="hero-section about gap">
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-delay={200}
                            data-aos-duration={300}
                        >
                            <div className="about-text">
                                <ul className="crumbs d-flex">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="two">
                                        <a href="index.html">
                                            <i className="fa-solid fa-right-long" />
                                            FAQ
                                        </a>
                                    </li>
                                </ul>
                                <h2>Want to join partnership?</h2>
                                <p>
                                    Egestas sed tempus urna et pharetra pharetra
                                    massa. Fermentum posuere urna nec tincidunt
                                    praesent semper.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-delay={300}
                            data-aos-duration={400}
                        >
                            <div className="join-img-blog">
                                <img
                                    alt="join"
                                    src="https://via.placeholder.com/546x401"
                                />
                                <i className="fa-solid fa-question" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* tabs questions */}
            <section className="tabs gap no-bottom">
                <div className="container">
                    <div className="tabs-img-back">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="Provides">
                                    <div
                                        className="nav nav-pills me-3"
                                        id="v-pills-tab"
                                        role="tablist"
                                        aria-orientation="vertical"
                                    >
                                        <button
                                            className="nav-link active"
                                            id="v-pills-home-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#v-pills-home"
                                            type="button"
                                            role="tab"
                                            aria-controls="v-pills-home"
                                            aria-selected="true"
                                        >
                                            Delivery
                                        </button>
                                        <button
                                            className="nav-link"
                                            id="v-pills-profile-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#v-pills-profile"
                                            type="button"
                                            role="tab"
                                            aria-controls="v-pills-profile"
                                            aria-selected="false"
                                        >
                                            Technical
                                        </button>
                                        <button
                                            className="nav-link"
                                            id="v-pills-messages-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#v-pills-messages"
                                            type="button"
                                            role="tab"
                                            aria-controls="v-pills-messages"
                                            aria-selected="false"
                                        >
                                            Restaurants
                                        </button>
                                    </div>
                                    <form>
                                        <input
                                            type="text"
                                            placeholder="Enter question keywords"
                                        />
                                        <button>
                                            <i className="fa-solid fa-magnifying-glass" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-12 gap">
                                <div
                                    className="tab-content"
                                    id="v-pills-tabContent"
                                >
                                    <div
                                        className="tab-pane fade show active"
                                        id="v-pills-home"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-home-tab"
                                    >
                                        <div className="questions">
                                            <i className="fa-solid fa-q" />
                                            <h6>
                                                Question 1. Volutpat maecenas
                                                volutpat blandit aliquam etiam
                                                erat velit. Diam donec
                                                adipiscing tristique risus nec
                                                feugiat in fermentum posuere?
                                            </h6>
                                        </div>
                                        <div className="questions answer">
                                            <p>
                                                Quis ipsum suspendisse ultrices
                                                gravida dictum. Aliquam eleifend
                                                mi in nulla posuere sollicitudin
                                                aliquam ultrices. Ut sem nulla
                                                pharetra diam sit amet nisl
                                                suscipit. Diam vulputate ut
                                                pharetra sit amet aliquam id
                                                diam maecenas. Amet mauris
                                                commodo quis imperdiet massa
                                                tincidunt nunc pulvinar sapien.
                                                <br />
                                                <br />
                                                Suspendisse ultrices gravida
                                                dictum fusce ut. Tempor commodo
                                                ullamcorper a lacus vestibulum
                                                sed. Risus at ultrices mi tempus
                                                imperdiet. Proin sagittis nisl
                                                rhoncus mattis rhoncus urna
                                                neque.
                                            </p>
                                            <i className="fa-solid fa-a" />
                                        </div>
                                        <div className="questions">
                                            <i className="fa-solid fa-q" />
                                            <h6>
                                                Question 2. Id neque aliquam
                                                vestibulum morbi. Integer vitae
                                                justo eget magna fermentum
                                                iaculis eu non diam. Nam libero
                                                justo laoreet sit amet cursus
                                                sit amet. Platea dictumst
                                                quisque sagittis purus sit amet
                                                volutpat consequat?
                                            </h6>
                                        </div>
                                        <div className="questions answer">
                                            <p>
                                                Condimentum mattis pellentesque
                                                id nibh tortor id aliquet
                                                lectus. Massa id neque aliquam
                                                vestibulum morbi blandit cursus
                                                risus. Elementum sagittis vitae
                                                et leo duis ut diam quam. A cras
                                                semper auctor neque vitae tempus
                                                quam pellentesque. Cursus vitae
                                                congue mauris rhoncus aenean
                                                vel. Ut aliquam purus sit amet
                                                luctus venenatis lectus magna.
                                                Fringilla est ullamcorper eget
                                                nulla. Tempor id eu nisl nunc mi
                                                ipsum faucibus vitae.
                                                <br />
                                                <br />
                                                <b>
                                                    Massa tincidunt nunc
                                                    pulvinar sapien et ligula
                                                    ullamcorper malesuada.
                                                </b>
                                                <br />
                                                <br />
                                                Non curabitur gravida arcu ac
                                                tortor dignissim convallis
                                                aenean. Odio pellentesque diam
                                                volutpat commodo sed egestas
                                                egestas. Sed sed risus pretium
                                                quam vulputate. Egestas egestas
                                                fringilla phasellus faucibus.
                                                Sit amet est placerat in egestas
                                                erat imperdiet sed. Varius sit
                                                amet mattis vulputate enim nulla
                                                aliquet.
                                            </p>
                                            <i className="fa-solid fa-a" />
                                        </div>
                                        <div className="questions">
                                            <i className="fa-solid fa-q" />
                                            <h6>
                                                Question 3. Mi proin sed libero
                                                enim sed faucibus turpis in.
                                                Tristique senectus et netus et
                                                malesuada fames ac turpis.
                                                Congue eu consequat ac felis.
                                                Fringilla urna porttitor rhoncus
                                                dolor purus non enim?
                                            </h6>
                                        </div>
                                        <div className="questions answer">
                                            <p>
                                                - Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua; -
                                                Dis parturient montes nascetur
                                                ridiculus mus mauris. Metus
                                                vulputate eu scelerisque felis
                                                imperdiet. Sit amet massa vitae
                                                tortor; - Viverra accumsan in
                                                nisl nisi scelerisque eu
                                                ultrices vitae auctor. Quam
                                                vulputate dignissim suspendisse
                                                in est. Augue mauris augue neque
                                                gravida in fermentum et;
                                                <br />
                                                <br />
                                                Feugiat sed lectus vestibulum
                                                mattis. Sit amet luctus
                                                venenatis lectus magna
                                                fringilla. Viverra orci sagittis
                                                eu volutpat odio facilisis
                                                mauris. Porttitor leo a diam
                                                sollicitudin tempor id eu.
                                                Lobortis scelerisque fermentum
                                                dui faucibus in ornare quam
                                                viverra orci. Diam vulputate ut
                                                pharetra sit. Odio aenean sed
                                                adipiscing diam donec.
                                            </p>
                                            <i className="fa-solid fa-a" />
                                        </div>
                                        <div className="questions">
                                            <i className="fa-solid fa-q" />
                                            <h6>
                                                Question 4. Ullamcorper sit amet
                                                risus nullam eget felis eget.
                                                Ullamcorper a lacus vestibulum
                                                sed arcu non odio euismod.
                                                Quisque egestas diam in arcu
                                                cursus?
                                            </h6>
                                        </div>
                                        <div className="questions answer">
                                            <p>
                                                Posuere ac ut consequat semper.
                                                Pharetra diam sit amet nisl. Sed
                                                pulvinar proin gravida hendrerit
                                                lectus a. Sagittis vitae et leo
                                                duis ut diam quam. Turpis
                                                egestas maecenas pharetra
                                                convallis posuere. Tincidunt
                                                lobortis feugiat vivamus at
                                                augue eget arcu dictum. Ipsum
                                                dolor sit amet consectetur.
                                                <br />
                                                <br />
                                                Nulla pharetra diam sit amet
                                                nisl suscipit adipiscing
                                                bibendum. Nulla porttitor massa
                                                id neque aliquam vestibulum
                                                morbi blandit cursus. Massa
                                                placerat duis ultricies lacus
                                                sed turpis tincidunt id aliquet.
                                                Mus mauris vitae ultricies leo
                                                integer malesuada.
                                            </p>
                                            <i className="fa-solid fa-a" />
                                        </div>
                                        <div className="button-gap">
                                            <a
                                                href="#"
                                                className="button button-2 non"
                                            >
                                                See all questions
                                                <i className="fa-solid fa-chevron-down" />
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-profile"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-profile-tab"
                                    >
                                        <div className="questions">
                                            <i className="fa-solid fa-q" />
                                            <h6>
                                                Question 1. Volutpat maecenas
                                                volutpat blandit aliquam etiam
                                                erat velit. Diam donec
                                                adipiscing tristique risus nec
                                                feugiat in fermentum posuere?
                                            </h6>
                                        </div>
                                        <div className="questions answer">
                                            <p>
                                                Quis ipsum suspendisse ultrices
                                                gravida dictum. Aliquam eleifend
                                                mi in nulla posuere sollicitudin
                                                aliquam ultrices. Ut sem nulla
                                                pharetra diam sit amet nisl
                                                suscipit. Diam vulputate ut
                                                pharetra sit amet aliquam id
                                                diam maecenas. Amet mauris
                                                commodo quis imperdiet massa
                                                tincidunt nunc pulvinar sapien.
                                                <br />
                                                <br />
                                                Suspendisse ultrices gravida
                                                dictum fusce ut. Tempor commodo
                                                ullamcorper a lacus vestibulum
                                                sed. Risus at ultrices mi tempus
                                                imperdiet. Proin sagittis nisl
                                                rhoncus mattis rhoncus urna
                                                neque.
                                            </p>
                                            <i className="fa-solid fa-a" />
                                        </div>
                                        <div className="questions">
                                            <i className="fa-solid fa-q" />
                                            <h6>
                                                Question 2. Id neque aliquam
                                                vestibulum morbi. Integer vitae
                                                justo eget magna fermentum
                                                iaculis eu non diam. Nam libero
                                                justo laoreet sit amet cursus
                                                sit amet. Platea dictumst
                                                quisque sagittis purus sit amet
                                                volutpat consequat?
                                            </h6>
                                        </div>
                                        <div className="questions answer">
                                            <p>
                                                Condimentum mattis pellentesque
                                                id nibh tortor id aliquet
                                                lectus. Massa id neque aliquam
                                                vestibulum morbi blandit cursus
                                                risus. Elementum sagittis vitae
                                                et leo duis ut diam quam. A cras
                                                semper auctor neque vitae tempus
                                                quam pellentesque. Cursus vitae
                                                congue mauris rhoncus aenean
                                                vel. Ut aliquam purus sit amet
                                                luctus venenatis lectus magna.
                                                Fringilla est ullamcorper eget
                                                nulla. Tempor id eu nisl nunc mi
                                                ipsum faucibus vitae.
                                                <br />
                                                <br />
                                                <b>
                                                    Massa tincidunt nunc
                                                    pulvinar sapien et ligula
                                                    ullamcorper malesuada.
                                                </b>
                                                <br />
                                                <br />
                                                Non curabitur gravida arcu ac
                                                tortor dignissim convallis
                                                aenean. Odio pellentesque diam
                                                volutpat commodo sed egestas
                                                egestas. Sed sed risus pretium
                                                quam vulputate. Egestas egestas
                                                fringilla phasellus faucibus.
                                                Sit amet est placerat in egestas
                                                erat imperdiet sed. Varius sit
                                                amet mattis vulputate enim nulla
                                                aliquet.
                                            </p>
                                            <i className="fa-solid fa-a" />
                                        </div>
                                        <div className="button-gap">
                                            <a
                                                href="#"
                                                className="button button-2 non"
                                            >
                                                See all questions
                                                <i className="fa-solid fa-chevron-down" />
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-messages"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-messages-tab"
                                    >
                                        <div className="questions">
                                            <i className="fa-solid fa-q" />
                                            <h6>
                                                Question 1. Volutpat maecenas
                                                volutpat blandit aliquam etiam
                                                erat velit. Diam donec
                                                adipiscing tristique risus nec
                                                feugiat in fermentum posuere?
                                            </h6>
                                        </div>
                                        <div className="questions answer">
                                            <p>
                                                Quis ipsum suspendisse ultrices
                                                gravida dictum. Aliquam eleifend
                                                mi in nulla posuere sollicitudin
                                                aliquam ultrices. Ut sem nulla
                                                pharetra diam sit amet nisl
                                                suscipit. Diam vulputate ut
                                                pharetra sit amet aliquam id
                                                diam maecenas. Amet mauris
                                                commodo quis imperdiet massa
                                                tincidunt nunc pulvinar sapien.
                                                <br />
                                                <br />
                                                Suspendisse ultrices gravida
                                                dictum fusce ut. Tempor commodo
                                                ullamcorper a lacus vestibulum
                                                sed. Risus at ultrices mi tempus
                                                imperdiet. Proin sagittis nisl
                                                rhoncus mattis rhoncus urna
                                                neque.
                                            </p>
                                            <i className="fa-solid fa-a" />
                                        </div>
                                        <div className="questions">
                                            <i className="fa-solid fa-q" />
                                            <h6>
                                                Question 2. Id neque aliquam
                                                vestibulum morbi. Integer vitae
                                                justo eget magna fermentum
                                                iaculis eu non diam. Nam libero
                                                justo laoreet sit amet cursus
                                                sit amet. Platea dictumst
                                                quisque sagittis purus sit amet
                                                volutpat consequat?
                                            </h6>
                                        </div>
                                        <div className="questions answer">
                                            <p>
                                                Condimentum mattis pellentesque
                                                id nibh tortor id aliquet
                                                lectus. Massa id neque aliquam
                                                vestibulum morbi blandit cursus
                                                risus. Elementum sagittis vitae
                                                et leo duis ut diam quam. A cras
                                                semper auctor neque vitae tempus
                                                quam pellentesque. Cursus vitae
                                                congue mauris rhoncus aenean
                                                vel. Ut aliquam purus sit amet
                                                luctus venenatis lectus magna.
                                                Fringilla est ullamcorper eget
                                                nulla. Tempor id eu nisl nunc mi
                                                ipsum faucibus vitae.
                                                <br />
                                                <br />
                                                <b>
                                                    Massa tincidunt nunc
                                                    pulvinar sapien et ligula
                                                    ullamcorper malesuada.
                                                </b>
                                                <br />
                                                <br />
                                                Non curabitur gravida arcu ac
                                                tortor dignissim convallis
                                                aenean. Odio pellentesque diam
                                                volutpat commodo sed egestas
                                                egestas. Sed sed risus pretium
                                                quam vulputate. Egestas egestas
                                                fringilla phasellus faucibus.
                                                Sit amet est placerat in egestas
                                                erat imperdiet sed. Varius sit
                                                amet mattis vulputate enim nulla
                                                aliquet.
                                            </p>
                                            <i className="fa-solid fa-a" />
                                        </div>
                                        <div className="questions">
                                            <i className="fa-solid fa-q" />
                                            <h6>
                                                Question 3. Mi proin sed libero
                                                enim sed faucibus turpis in.
                                                Tristique senectus et netus et
                                                malesuada fames ac turpis.
                                                Congue eu consequat ac felis.
                                                Fringilla urna porttitor rhoncus
                                                dolor purus non enim?
                                            </h6>
                                        </div>
                                        <div className="questions answer">
                                            <p>
                                                - Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua; -
                                                Dis parturient montes nascetur
                                                ridiculus mus mauris. Metus
                                                vulputate eu scelerisque felis
                                                imperdiet. Sit amet massa vitae
                                                tortor; - Viverra accumsan in
                                                nisl nisi scelerisque eu
                                                ultrices vitae auctor. Quam
                                                vulputate dignissim suspendisse
                                                in est. Augue mauris augue neque
                                                gravida in fermentum et;
                                                <br />
                                                <br />
                                                Feugiat sed lectus vestibulum
                                                mattis. Sit amet luctus
                                                venenatis lectus magna
                                                fringilla. Viverra orci sagittis
                                                eu volutpat odio facilisis
                                                mauris. Porttitor leo a diam
                                                sollicitudin tempor id eu.
                                                Lobortis scelerisque fermentum
                                                dui faucibus in ornare quam
                                                viverra orci. Diam vulputate ut
                                                pharetra sit. Odio aenean sed
                                                adipiscing diam donec.
                                            </p>
                                            <i className="fa-solid fa-a" />
                                        </div>
                                        <div className="button-gap">
                                            <a
                                                href="#"
                                                className="button button-2 non"
                                            >
                                                See all questions
                                                <i className="fa-solid fa-chevron-down" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    );
};

export default faq;
