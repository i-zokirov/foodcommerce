import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "@/styles/globals.css";
import "@/styles/responsive.css";
import "@/styles/color.css";
import AOS from "aos";
import "aos/dist/aos.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js"); // Import bootstrap JS

        AOS.init();
    });

    return <Component {...pageProps} />;
}
