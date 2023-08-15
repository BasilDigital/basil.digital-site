import { styled } from "styled-components";
import { Link } from "react-router-dom";
import GitHubIcon from "./icons/github.svg"
import TelegramIcon from "./icons/telegram.svg"
import TwitchIcon from "./icons/twitch.svg"


const socialLinks = [
    {
        to: 'https://github.com/BasilDigital?tab=repositories',
        icon: GitHubIcon
    },
    {
        to: 'https://t.me/basdigital',
        icon: TelegramIcon
    },
    {
        to: 'https://www.twitch.tv/basilDigital',
        icon: TwitchIcon
    }
]

export const SocialLinkList = () => {
    return <SocialLinkListWrapper>{socialLinks.map((socialLinkElement) => <SocialLink iconSrc={socialLinkElement.icon} to={socialLinkElement.to} />)}</SocialLinkListWrapper>
}

const SocialLinkListWrapper = styled.div`
    display: flex;
    gap: 6rem;
    margin: 4rem;
`


type SocialLinkProps = {
    iconSrc: string;
    to: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ iconSrc, to }) => {
    return <SocialLinkStyled to={to} target="_blank"> <SocialIconStyled src={iconSrc} /></SocialLinkStyled>
}
const SocialLinkStyled = styled(Link)`
    text-decoration: none;
`

const SocialIconStyled = styled.img`
    height: 5rem;
`