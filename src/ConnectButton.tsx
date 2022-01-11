import { FC, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Loader } from "react-feather";
import { useAuth } from "./useAuth";

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    99% {
        transform: rotate(360deg);
    }
`;

const Inner = styled.div`
    width: fit-content;
    border-radius: 2rem;
    color: linear-gradient(264.1deg, #0f21c0 2.1%, #ff39d4 108.76%);
    span {
        display: block;
        padding: 0.5rem 1.5rem;
    }
`;

const Wrapper = styled.button<{ loading: number }>`
    background: linear-gradient(264.1deg, #0f21c0 2.1%, #ff39d4 108.76%);
    width: fit-content;
    font-weight: bolder;
    cursor: pointer;
    padding: 2px;
    border-radius: 2rem;
    border: none;
    color: white;
    font-size: 1rem;
    transition: 250ms;
    position: relative;
    &:hover {
        ${Inner} {
            background: #121212;
        }
    }
    &:active {
        transform: scale(0.99);
    }
    span {
        opacity: ${({ loading }) => (loading == 0 ? 1 : 0)};
    }
    svg {
        position: absolute;
        left: calc(50% - 0.7rem);
        top: 0.4rem;
        animation: ${rotate} 1s linear infinite;
    }
`;

export const ConnectButton: FC<{ onClick: () => Promise<void> }> = ({
    onClick,
}) => {
    const [loading, setLoading] = useState(false);

    const login = async () => {
        setLoading(true);
        try {
            await onClick();
        } catch {}
        setLoading(false);
    };

    return (
        <Wrapper onClick={login} loading={+loading}>
            <Inner>
                <span>Connect Wallet</span>
                {loading && <Loader height={"1.4rem"} />}
            </Inner>
        </Wrapper>
    );
};
