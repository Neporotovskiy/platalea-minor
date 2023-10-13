import React, { FC, ImgHTMLAttributes } from "react";

import { Image } from "components/image";

type Props = ImgHTMLAttributes<HTMLImageElement>;

export const Picture: FC<Props> = ({ children: _, alt, ...props }) => (
    <Image {...props} style={{ height: "auto" }} alt={alt} />
);
