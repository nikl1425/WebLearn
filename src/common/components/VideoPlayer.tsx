import {FC} from 'react';


const youtubeSource = 'youtube';
const localSource = 'local';

type VideoPlayerProps = {
    source: 'youtube' | 'local'
}

const LocalSourcePlayer: FC = () => {
    return (
        <>
        
        </>
    )
}

const YouTubePlayer : FC = () => {
    return (
        <>
        
        </>
    )
}

const VideoPlayer : FC<VideoPlayerProps> = ({source}) => {

    return (
        <>
            {source === youtubeSource && <YouTubePlayer />}
            {source === localSource && <LocalSourcePlayer />}
        </>
    )
}