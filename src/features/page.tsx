import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

import { AsyncError } from "features/error";
import { Navigation } from "features/navigation";

type Props = {
    skeleton: React.ReactNode | React.ReactNode[];
    children: React.ReactNode | React.ReactNode[];
};

export const Page = <T extends {}>({ skeleton, children }: Props) => {
    const { promise } = useLoaderData() as LoaderData<T>;
    return (
        <>
            <Navigation />
            <Suspense fallback={skeleton}>
                <Await resolve={promise} errorElement={<AsyncError />}>
                    {children}
                </Await>
            </Suspense>
        </>
    );
};
