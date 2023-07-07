import React from 'react';
interface IChannelListProps {
    showSearch?: boolean;
    theme?: string;
    uriPrefixOnCreateChannel?: string;
    createChannelIcon?: JSX.Element;
    newChannelIcon?: JSX.Element;
    newGroupIcon?: JSX.Element;
    newChatIcon?: JSX.Element;
    uploadPhotoIcon?: JSX.Element;
}
declare const CreateChannelButton: React.FC<IChannelListProps>;
export default CreateChannelButton;
