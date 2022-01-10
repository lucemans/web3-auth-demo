import styled from 'styled-components';

const Inner = styled.div`
    padding: 0.5rem 1.5rem;
    width: fit-content;
    border-radius: 2rem;
    color: linear-gradient(264.1deg, #0F21C0 2.1%, #FF39D4 108.76%);
`;

const Wrapper = styled.button`
    background: linear-gradient(264.1deg, #0F21C0 2.1%, #FF39D4 108.76%);
    width: fit-content;
    font-weight: bolder;
    cursor: pointer;
    padding: 2px;
    border-radius: 2rem;
    border: none;
    color: white;
    font-size: 1rem;
    transition: 250ms;
    &:hover {
        ${Inner} {
            background: #121212;
        }
    }
    &:active {
        transform: scale(0.99);
    }
`;

export const ConnectButton = () => {

    return (
        <Wrapper>
            <Inner>
                Connect Wallet
            </Inner>
        </Wrapper>
    );
};