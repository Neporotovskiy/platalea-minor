import React, { FC, ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement>;

export const Picture: FC<Props> = ({ children: _, alt, ...props }) => (
    <img {...props} alt={alt} />
);
