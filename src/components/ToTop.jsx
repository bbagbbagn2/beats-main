import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { FaArrowUp } from "react-icons/fa";

export default function ToTopButton() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    return (
        scrollPosition > 500 && (
            <TopButton onClick={scrollTop}>
                <FaArrowUp size="26" color="#fff" />
            </TopButton>
        )
    );
}

const TopButton = styled.button`
    /* Positioning */
    padding: 0.5rem;
    position: fixed;    
    bottom: 1.5rem;
    right: 1.5rem;

    /* Layout */
    display: flex;

    /* Styling */
    background: #FFC700;
    border: 1.5px solid white;
    border-radius: 50%;
    box-shadow: -1px 0 4px rgba(14, 55, 63, 0.15);
    font-size: 2rem;

    /* Cursor Handling */
    cursor: pointer;

    /* Z-index */
    z-index: 1000;
`;