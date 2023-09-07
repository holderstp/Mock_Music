import { Outlet, useParams } from "react-router-dom";
import { musics } from "../data/data";
import { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";
// export { default as useAudio } from "./useAudio";

import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RandomMusicsTrue,
  RandomMusicsFalse,
  VolumeOff,
  VolumeOn,
} from "../FaIcons/index";

interface Props {
  index: any;
  isFull: boolean;
  setId: (e: string) => void;
  setIsFull: (e: boolean) => void;
  windowWidth: number;
}
const Player = ({ index, setId, setIsFull, isFull, windowWidth }: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(1);
  const [duration, setDuration] = useState<number>(0);
  const [isRandom, setIsRandom] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // const audioTag = useRef<null | any>(null);
  // const progressBar = useRef<null | any>(null);
  // const animationRef = useRef<null | any>(null);

  // useEffect(() => {
  //   if (index !== "") {
  //     if (isPlaying) {
  //       audioTag.current?.play();
  //       animationRef.current = requestAnimationFrame(whilePlaying);
  //       audioTag.current!.volume = volume;

  //       if (isMuted) {
  //         audioTag.current.muted = true;
  //       } else audioTag.current.muted = false;

  //       const interval = setInterval(() => {
  //         const seconds = Math.floor(audioTag.current.duration);
  //         setDuration(seconds);
  //         if (windowWidth >= 830 || isFull) progressBar.current.max = seconds;
  //       }, 1000);

  //       setInterval(() => {
  //         if (duration > 0 || duration !== undefined) {
  //           clearInterval(interval);

  //           if (audioTag.current.currentTime === audioTag.current.duration) {
  //             isRandom ? skipRandom() : skipForward();
  //           }
  //         }
  //       }, 1100);
  //     } else {
  //       audioTag.current.pause();
  //       audioTag.current.volume = volume;
  //       cancelAnimationFrame(animationRef.current);
  //     }
  //   }
  // }, [[], isRandom]);

  // const calculateDuration = (sec: number) => {
  //   const minutes = Math.floor(sec / 60);
  //   const newMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  //   const seconds = Math.floor(sec % 60);
  //   const newSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  //   return `${newMinutes}:${newSeconds}`;
  // };

  // const skipForward = () => {
  //   if (index === "") {
  //     alert("Choose a song!");
  //   } else if (isRandom) {
  //     skipRandom();
  //   } else if (index === "13") {
  //     setId("1");
  //   } else {
  //     const idNum = parseInt(index);
  //     const newId = idNum + 1;
  //     setId(newId.toString());
  //   }
  // };

  // const skipRandom = () => {
  //   const idNum = parseInt(index);
  //   const randomNum = Math.floor(Math.random() * 9);
  //   if (randomNum === 0 || randomNum === idNum) {
  //     const newNum = randomNum + 1;
  //     setId(newNum.toString());
  //   } else {
  //     setId(randomNum.toString());
  //   }
  // };

  // const skipBack = () => {
  //   if (index === "") {
  //     alert("Choose a song!");
  //   } else {
  //     const idNum = parseInt(index);
  //     const newId = idNum - 1;
  //     setId(newId.toString());
  //   }
  // };

  // const whilePlaying = () => {
  //   if (windowWidth >= 830 || isFull) {
  //     progressBar.current.value = audioTag?.current?.currentTime;
  //     animationRef.current = requestAnimationFrame(whilePlaying);
  //     changeCurrentTime();
  //   }
  // };

  // const changeRange = () => {
  //   if (windowWidth >= 830 || isFull) {
  //     audioTag.current.currentTime = progressBar.current.value;
  //     changeCurrentTime();
  //   }
  // };

  // const changeCurrentTime = () => {
  //   setCurrentTime(progressBar.current.value);
  // };
  const audioTag = useRef<HTMLAudioElement | any>(null);
  const progressBar = useRef<HTMLInputElement | any>(null);
  const animationRef = useRef<HTMLAudioElement | any>(null);
  useEffect(() => {
    const awaitFunction = () => {
      console.log(index);
      if (index !== "") {
        console.log(audioTag);
        if (isPlaying && audioTag.current && audioTag.current !== null) {
          audioTag.current.play();

          animationRef.current = requestAnimationFrame(whilePlaying);

          audioTag.current.volume = volume;

          if (isMuted) {
            audioTag.current.muted = true;
          } else {
            audioTag.current.muted = false;
          }

          const interval = setInterval(() => {
            if (audioTag.current !== null) {
              const seconds = Math.floor(audioTag.current.duration);
              setDuration(seconds);
              if (windowWidth >= 830 || isFull) {
                progressBar.current?.setAttribute("max", seconds.toString());
              }
            }
          }, 1000);

          setInterval(() => {
            if (duration > 0 || duration !== null) {
              clearInterval(interval);

              if (
                audioTag.current !== null &&
                audioTag.current.currentTime === audioTag.current.duration
              ) {
                isRandom ? skipRandom() : skipForward();
              }
            }
          }, 1100);
        } else if (audioTag.current !== null) {
          audioTag.current.pause();
          audioTag.current.volume = volume;
          cancelAnimationFrame(animationRef.current!);
        }
      }
    };
    setTimeout(awaitFunction, 1);
  }, [index, isPlaying, isMuted, volume, windowWidth, isFull]);

  const calculateDuration = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const newMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const newSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${newMinutes}:${newSeconds}`;
  };

  const skipForward = () => {
    if (index === "") {
      alert("Choose a song!");
    } else if (isRandom) {
      skipRandom();
    } else if (index === "13") {
      setId("1");
    } else {
      const idNum = parseInt(index);
      const newId = idNum + 1;
      setId(newId.toString());
    }
  };

  const skipRandom = () => {
    const idNum = parseInt(index);
    const randomNum = Math.floor(Math.random() * 9);
    if (randomNum === 0 || randomNum === idNum) {
      const newNum = randomNum + 1;
      setId(newNum.toString());
    } else {
      setId(randomNum.toString());
    }
  };

  const skipBack = () => {
    console.log("ahihi");
    if (index === "") {
      alert("Choose a song!");
    } else {
      const idNum = parseInt(index);
      const newId = idNum - 1;
      setId(newId.toString());
    }
  };

  const whilePlaying = () => {
    if (windowWidth >= 830 || isFull) {
      if (progressBar.current !== null && audioTag.current !== null) {
        progressBar.current.value = audioTag.current.currentTime;
        animationRef.current = requestAnimationFrame(whilePlaying);
        changeCurrentTime();
      }
    }
  };

  const changeRange = () => {
    if (windowWidth >= 830 || isFull) {
      if (progressBar.current !== null && audioTag.current !== null) {
        audioTag.current.currentTime = parseFloat(progressBar.current.value);
        changeCurrentTime();
      }
    }
  };

  const changeCurrentTime = () => {
    if (progressBar.current !== null) {
      setCurrentTime(parseFloat(progressBar.current.value));
    }
  };
  return (
    <>
      <div className="musicDiv fixed left-0 right-0 bottom-0 w-full flex bg-gray-800 transition ease-in-out delay-150 bg-grey-500 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-200 duration-300">
        {musics.map((music) =>
          index === music.id ? (
            <div
              onClick={() => setIsFull(windowWidth <= 820 && !isFull)}
              className="music flex"
              key={music.id}
            >
              {!isFull ? (
                <div className="flex justify-start items-center">
                  <div className="w-50%">
                    <img src={music.album_img} width="20%" />
                  </div>

                  <div className="w-50%">
                    <h1>{music.name}</h1>
                    <h3>{music.author}</h3>
                  </div>
                </div>
              ) : (
                ""
              )}
              <audio src={music.audio} ref={audioTag} />
              <div className="player flex">
                <div className="inputButtons flex">
                  {isFull || windowWidth >= 830 ? (
                    <div className="progressBar">
                      <p className="PcurrentTime">
                        {calculateDuration(currentTime)}
                      </p>
                      <input
                        type="range"
                        className="currentProgress"
                        defaultValue="0"
                        ref={progressBar}
                        onChange={changeRange}
                      />

                      <p className="Pduration">
                        {duration &&
                          !isNaN(duration) &&
                          calculateDuration(duration)}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="buttons">
                    {windowWidth >= 830 || isFull ? (
                      <button
                        onClick={() => setIsRandom(!isRandom)}
                        className="randomMusicsButton"
                      >
                        {isRandom ? (
                          <RandomMusicsTrue />
                        ) : (
                          <RandomMusicsFalse />
                        )}
                      </button>
                    ) : (
                      ""
                    )}
                    <button onClick={skipBack}>
                      <SkipBack />
                    </button>
                    <button
                      className="playPause"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause /> : <Play />}
                    </button>
                    <button onClick={skipForward}>
                      <SkipForward />
                    </button>
                  </div>
                </div>
              </div>

              {windowWidth > 825 && (
                <div className="test">
                  <button
                    className="volumeButton"
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? <VolumeOff /> : <VolumeOn />}
                  </button>
                  <input
                    type="range"
                    step="0.01"
                    onChange={(e: any) => setVolume(e.target.value)}
                    value={volume}
                    max="1"
                    min="0"
                  />
                </div>
              )}
            </div>
          ) : (
            ""
          )
        )}
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};
export default Player;
