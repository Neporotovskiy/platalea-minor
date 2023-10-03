import React from "react";
import { useParams } from "react-router-dom";

import { DocumentTitle } from "components/document-title";

export const Article = () => {
    const params = useParams();
    return (
        <>
            <DocumentTitle>GSF - Статья</DocumentTitle>
            {params.slug} Article page!
        </>
    );
};
