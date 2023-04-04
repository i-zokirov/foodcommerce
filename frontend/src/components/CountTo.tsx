import React, { useEffect, useRef, useState } from "react";

interface CountToProps {
    from?: number;
    to?: number;
    decimals?: number;
}

function formatNumber(number: number, decimals: number): string {
    return number.toFixed(decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
}

function CountTo({
    from = 0,
    to = 10000,
    decimals = 0,
}: CountToProps): JSX.Element {
    const [count, setCount] = useState<number>(from);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const requestRef = useRef<number>(0);

    const animate = (
        timestamp: number,
        startTime: number,
        duration: number
    ): void => {
        const progress = Math.min(1, (timestamp - startTime) / duration);
        const currentCount = Math.floor(from + (to - from) * progress);
        setCount(currentCount);

        if (progress < 1) {
            requestRef.current = requestAnimationFrame((ts) =>
                animate(ts, startTime, duration)
            );
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 3000);
    }, []);

    useEffect(() => {
        if (isVisible) {
            const duration = 2000;
            const startTime = performance.now();
            requestRef.current = requestAnimationFrame((ts) =>
                animate(ts, startTime, duration)
            );
        }

        return () => {
            cancelAnimationFrame(requestRef.current);
        };
    }, [isVisible]);

    return (
        <div
            style={{ visibility: isVisible ? "visible" : "hidden" }} // hide component initially
        >
            {parseFloat(formatNumber(count, decimals))}
        </div>
    );
}

export default CountTo;
