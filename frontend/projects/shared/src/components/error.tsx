import React from "react";

import { Text } from "./text";

import "./error.css";

type Props = {
    message: React.ReactNode;
    description: React.ReactNode;
};

export const Error = ({ message, description }: Props) => {
    return (
        <section className="error">
            <Text as="h2" size="medium" color="light">
                {message}
            </Text>
            <Text as="p" size="small" color="light">
                {description}
            </Text>
        </section>
    );
};
