import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "@/styles/globals.css";
import "@/styles/responsive.css";
import "@/styles/color.css";
import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "@/redux/store";

export default function MyApp({ Component, ...rest }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(rest);
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js"); // Import bootstrap JS

        AOS.init();
    });

    return (
        <Provider store={store}>
            <Component {...props.pageProps} />
        </Provider>
    );
}
