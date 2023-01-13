import React from 'react';
interface IProps {
    image?: string | null;
    name: string;
    size?: number;
    textSize?: number;
    marginAuto?: boolean;
    setDefaultAvatar?: boolean;
    DeletedIcon?: JSX.Element;
    defaultAvatarIcon?: JSX.Element;
    defaultAvatarColor?: string;
}
declare const Avatar: React.FC<IProps>;
export default Avatar;
