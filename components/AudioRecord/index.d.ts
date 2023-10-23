import React from 'react';
interface AudioPlayerProps {
    sendRecordedFile: (data: {
        file: File;
        objectUrl: string;
        thumb: number[];
        dur: number;
    }) => void;
    setShowRecording: (start: boolean) => void;
    showRecording: boolean;
}
declare const AudioRecord: React.FC<AudioPlayerProps>;
export default AudioRecord;
