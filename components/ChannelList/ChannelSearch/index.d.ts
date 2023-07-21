import React from 'react';
interface IChannelSearchProps {
    searchValue: string;
    theme?: string;
    handleSearchValueChange: (e: any) => void;
    getMyChannels: () => void;
    inline?: boolean;
    borderRadius?: string;
    searchInputBackgroundColor?: string;
    searchInputTextColor?: string;
}
declare const ChannelSearch: React.FC<IChannelSearchProps>;
export default ChannelSearch;
