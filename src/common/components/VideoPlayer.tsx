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
            <iframe className="w-full aspect-video " src="https://www.youtube.com/embed/tKXA1qLUN6o"></iframe>    
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

export default VideoPlayer;