"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

interface AudioPlayerProps {
    src: string;
}

const AudioPlayer = ({ src }: AudioPlayerProps) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            if (!audio.duration) return;

            const percentage = (audio.currentTime / audio.duration) * 100;

            if (percentage >= 99.9) {
                setProgress(0);
                setIsPlaying(false);
                audio.currentTime = 0;
                return;
            }

            setProgress(percentage);
        };

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        audio.addEventListener("timeupdate", updateProgress);
        audio.addEventListener("play", handlePlay);
        audio.addEventListener("pause", handlePause);

        return () => {
            audio.removeEventListener("timeupdate", updateProgress);
            audio.removeEventListener("play", handlePlay);
            audio.removeEventListener("pause", handlePause);
        };
    }, []);

    return (
        <div className="flex items-center gap-3 ml-auto">
            <button
                onClick={togglePlay}
                className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
            >
                {isPlaying ? (
                    <Pause size={14} />
                ) : (
                    <Play size={14} />
                )}
            </button>

            <div className="w-20 h-1 hidden md:block bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-blue-500 transition-all duration-200"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <audio ref={audioRef} src={src} preload="metadata" />
        </div>
    );
};

export default AudioPlayer;