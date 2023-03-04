import { useState } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";

import {
  ProfileCard,
  Avatar,
  BoxAvatar,
  LineLeft,
  LineRight,
  BoxInfo,
  BoxTweet,
  CounTweet,
  Tweet,
  BoxFollow,
  CounFollow,
  Follow,
  Button,
} from "./CardItem.styled";

import line1 from "../../images/central-line.png";

const useCardItemState = (countFollowers, colorButton) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [name, setName] = useLocalStorage("name", countFollowers);
  const [button, setButton] = useLocalStorage("button", "FOLLOW");
  const [color, setColor] = useLocalStorage("colorButton", colorButton);

  const handleClick = () => {
    setButtonClicked(!buttonClicked);
    setName(buttonClicked ? countFollowers : countFollowers + 1);
    setButton(buttonClicked ? "FOLLOW" : "FOLLOWING");
    setColor(buttonClicked ? colorButton : "#5CD3A8");
  };

  return { name, button, color, handleClick };
};

export default function CardItem({
  avatar,
  countTweets,
  tweets,
  countFollowers,
  followers,
}) {
  const { name, button, color, handleClick } = useCardItemState(
    countFollowers,
    "#EBD8FF"
  );

  return (
    <ProfileCard>
      <BoxAvatar>
        <LineLeft src={line1} alt={line1} />
        <LineRight src={line1} alt={line1} />
        <Avatar src={avatar} alt={avatar} />
      </BoxAvatar>
      <BoxInfo>
        <BoxTweet>
          <CounTweet>{countTweets}</CounTweet>
          <Tweet>{tweets} </Tweet>
        </BoxTweet>
        <BoxFollow>
          <CounFollow>{name.toLocaleString("en")}</CounFollow>
          <Follow>{followers} </Follow>
        </BoxFollow>
      </BoxInfo>
      <Button
        name={button}
        onClick={handleClick}
        style={{ backgroundColor: color }}
      >
        {button}
      </Button>
    </ProfileCard>
  );
}
