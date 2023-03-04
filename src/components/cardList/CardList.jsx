import { useState } from "react";
import Container from "../container/Container";
import CardItem from "../cardItem/CardItem";

import { WrapperCards, List } from "./CardList.styled";

import dataCard from "../DataCard";

export const CardlList = () => {
  const userCard = dataCard;

  return (
    <Container>
      <WrapperCards>
        {userCard &&
          userCard.map(
            ({
              id,
              avatar,
              userName,
              countTweets,
              tweets,
              countFollowers,
              followers,
            }) => (
              <List key={id}>
                <CardItem
                  avatar={avatar}
                  userName={userName}
                  countTweets={countTweets}
                  tweets={tweets}
                  countFollowers={countFollowers}
                  followers={followers}
                />
              </List>
            )
          )}
      </WrapperCards>
    </Container>
  );
};
