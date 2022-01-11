import styled from "styled-components";
import { useAuth } from "./useAuth";

const Wrapper = styled.div``;

const Title = styled.div`
    font-size: 8rem;
    background: linear-gradient(267.37deg, #ff00c7 7.06%, #0085ff 99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: fit-content;
`;

const Username = styled.div`
    font-size: 2rem;
`;

export const WelcomePage = () => {
    const { account } = useAuth();

    return (
        <Wrapper>
            <Title>WELCOME</Title>
            <Username>{account}</Username>
        </Wrapper>
    );
};
