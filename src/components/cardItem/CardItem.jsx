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

export default function CardItem({
  avatar,
  countTweets,
  tweets,
  countFollowers,
  followers,
}) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [name, setName] = useLocalStorage("name", countFollowers);
  const [button, setButton] = useLocalStorage("button", "FOLLOW");
  const [colorButton, setColorButton] = useLocalStorage(
    "colorButton",
    "backgroundColor: #EBD8FF"
  );
  const [color, setColor] = useState(colorButton);

  const handleClick = (e) => {
    if (e.target.name.includes("FOLLOW")) {
      setButtonClicked(!buttonClicked);
      setName(buttonClicked ? countFollowers : countFollowers + 1);
      setButton(buttonClicked ? "FOLLOW" : "FOLLOWING");
      setColor(buttonClicked ? colorButton : "#5CD3A8");
    }
  };

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
