import styled from "styled-components"

import { NavLink } from "react-router-dom"

export const NavigationBar = () => {
    const navItemList = [
        {
            to: '',
            label: 'Главная'
        },
        {
            to: 'calendar',
            label: 'Расписание'
        }
    ]

    return <NavigationBarWrapper>
        {navItemList.map((navElement) => <NavLinkStyled to={navElement.to}>{navElement.label}</NavLinkStyled>)}
    </NavigationBarWrapper>
}

const NavigationBarWrapper = styled.div`
    margin: 0 1.7rem 0 0;
    display: flex;
`

const NavLinkStyled = styled(NavLink)`
    font-size: 3rem;
    text-decoration: none;
    padding: 1.5rem 3rem;
    color: gray;
     &.active {
        color: black;
        border-left: 0.25rem solid black;
        border-right: 0.25rem solid black;
        border-bottom: 0.25rem solid black;
        &:first-child {
            border-left: 0; 
        }
     }
`