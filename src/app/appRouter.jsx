import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { Main } from "pages/main";
import { Profile } from "pages/profile";
import { Error } from "pages/error";

export const appRouter = createBrowserRouter([
    {
        element: <BaseLayout />,
        errorElement: <Error />,
        children: [
            { path: "/", element: <Main /> },
            { path: "/profile", element: <Profile /> },
        ],
    },
]);
