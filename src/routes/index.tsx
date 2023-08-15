import { MainLayout } from '../layout/MainLayout';

import { CalendarPage } from '../pages/CalendarPage';
import { MainPage } from '../pages/MainPage';


export const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <MainPage /> },
            { path: "calendar", element: <CalendarPage /> },
        ]
    }
];

