import styled, { createGlobalStyle } from "styled-components";
import { ConnectButton } from "./ConnectButton";
import { useAuth } from "./useAuth";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WelcomePage } from "./WelcomePage";
import { subAccount } from "./utils/subAccount";

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        font-family: "Russo One", monospace, sans-serif;
    }
    * {
        box-sizing: border-box;
    }
    :root {
        font-size: 16px;
    }
`;

const Wrapper = styled.div`
    background: #121212;
    color: white;
    height: 100vh;
    padding: 1rem;
`;

const Navbar = styled.div`
    width: 100;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`;

const NavCircle = styled.div`
    width: 2.4rem;
    height: 2.4rem;
    border: 4px solid #545454;
    border-radius: 50%;
`;

const ProfileImg = styled.div`
    width: 1.1rem;
    height: 1.1rem;
    background: linear-gradient(267.37deg, #ff00c7 7.06%, #0085ff 99%);
    border-radius: 50%;
`;

const UserLabel = styled.div`
    padding: 0.4rem 0.4rem;
    height: 2.4rem;
    border: 4px solid #545454;
    border-radius: 2.4rem;
    display: flex;
    gap: 0.5rem;
`;

export const App = () => {
    const { active, activate, account } = useAuth();

    return (
        <Wrapper>
            <GlobalStyle />
            <Navbar>
                {!active && (
                    <ConnectButton
                        onClick={async () => {
                            await activate(new InjectedConnector({}));
                        }}
                    />
                )}
                {
                    active && (
                        <UserLabel>
                            <ProfileImg />
                            { subAccount(account) }
                        </UserLabel>
                    )
                }
                <NavCircle />
            </Navbar>
            {active && <WelcomePage />}
        </Wrapper>
    );
};
