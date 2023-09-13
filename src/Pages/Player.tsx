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
import ListSearch from "../Components/ListSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface Props {
  isSearch: boolean;
  index: any;
  isFull: boolean;
  setId: (e: string) => void;
  setIsFull: (e: boolean) => void;
  windowWidth: number;
  filterData: any;
  isFavorite: any;
  handleOffFavorite: (index: any, i: any) => void;
  handleOnFavorite: (index: any, i: any) => void;
}
const Player = ({
  isSearch,
  index,
  setId,
  setIsFull,
  isFull,
  windowWidth,
  filterData,
  isFavorite,
  handleOffFavorite,
  handleOnFavorite,
}: Props) => {
  const params = useParams();
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(1);
  const [duration, setDuration] = useState<number>(0);
  const [isRandom, setIsRandom] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  // useRef
  const audioTag = useRef<HTMLAudioElement | any>(null);
  const progressBar = useRef<HTMLInputElement | any>(null);
  const animationRef = useRef<HTMLAudioElement | any>(null);
  //rerender
  useEffect(() => {
    const awaitFunction = () => {
      // console.log(index);
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
  // caculate time
  const calculateDuration = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const newMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const newSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${newMinutes}:${newSeconds}`;
  };
  // Skip Foward
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
  // Skip Random
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
  // Skip Back
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
  // WhilePlaying
  const whilePlaying = () => {
    if (windowWidth >= 830 || isFull) {
      if (progressBar.current !== null && audioTag.current !== null) {
        progressBar.current.value = audioTag.current.currentTime;
        animationRef.current = requestAnimationFrame(whilePlaying);
        changeCurrentTime();
      }
    }
  };
  // Change Range
  const changeRange = () => {
    if (windowWidth >= 830 || isFull) {
      if (progressBar.current !== null && audioTag.current !== null) {
        audioTag.current.currentTime = parseFloat(progressBar.current.value);
        changeCurrentTime();
      }
    }
  };
  // Change Current Time
  const changeCurrentTime = () => {
    if (progressBar.current !== null) {
      setCurrentTime(parseFloat(progressBar.current.value));
    }
  };
  return (
    <>
      <div className="fixed left-0 right-0 bottom-0 w-full  bg-black transition ease-in-out delay-10 hover:-translate-y-0.5 hover:scale-100 hover:bg-cyan-900 duration-200 h-[150px] rounded-md z-10">
        {musics.map((music: any, i: any) =>
          index === music.id ? (
            <div
              onClick={() => setIsFull(windowWidth <= 820 && !isFull)}
              className="flex justify-start items-center w-full"
              key={music.id}
            >
              {!isFull ? (
                <div className="flex justify-center items-center w-1/3">
                  <div className="w-1/2 ml-3 ">
                    <img src={music.album_img} className="rounded-2xl" />
                  </div>
                  <div className="w-full">
                    <h1 className="font-bold text-2xl w-full text-white">
                      {music.name}
                    </h1>
                    <h3 className=" text-xl w-full text-white">
                      {music.author}
                    </h3>
                  </div>
                </div>
              ) : (
                ""
              )}
              <audio src={music.audio} ref={audioTag} />
              <div className="player flex w-full ">
                <div className="inputButtons flex flex-col w-4/5">
                  {isFull || windowWidth >= 830 ? (
                    <div className="progressBar flex justify-center items-center">
                      <p className="PcurrentTime text-white">
                        {calculateDuration(currentTime)}
                      </p>

                      <input
                        type="range"
                        className="currentProgress"
                        defaultValue="10"
                        ref={progressBar}
                        onChange={changeRange}
                      />

                      <p className="Pduration text-white">
                        {duration &&
                          !isNaN(duration) &&
                          calculateDuration(duration)}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="buttons flex justify-center items-center space-x-[20px] mt-10">
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
                    {isFavorite ? (
                      <button
                        onClick={() => handleOffFavorite(music.favorite, i)}
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          size="2xl"
                          style={{ color: "red" }}
                        />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleOnFavorite(music.favorite, i)}
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          size="2xl"
                          style={{ color: "white" }}
                        />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {windowWidth > 825 && (
                <div className="test w-1/5 justify-center items-center space-x-[20px] flex">
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
