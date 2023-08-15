import { styled } from "styled-components"
import logo from "../logo.svg"
import { SocialLinkList } from "../features/SocialLinkList/SocialLinkList"

export const MainPage = () => {

    return <MainPageWrapper>
        <LogoStyled src={logo} />
        <SocialLinkList />
    </MainPageWrapper>
}

const MainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-items: center;
    justify-content: center;
`

const LogoStyled = styled.img`
    height: 20rem;
`