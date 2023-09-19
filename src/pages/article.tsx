import React from "react";
import { useParams } from "react-router-dom";

export const Article = () => {
    const params = useParams();
    return <>{params.slug} Article page!</>;
};
