import { Outlet } from "react-router";
import { NavigationBar } from "../features/NavigationBar/NavigationBar";
import { styled } from "styled-components";


export const MainLayout = () => {
    return (
        <MainLayoutWrapper>
            <NavigationBar />
            <Outlet />
        </MainLayoutWrapper>
    )
}

const MainLayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100dvh;
`