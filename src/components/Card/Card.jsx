import {
  CardContainer,
  CardLine,
  Avatar,
  AvatarImg,
  AvatarCircle,
  UserName,
  Tweets,
  Followers,
  Button,
} from './Card.styled';

// import avatar from "../Pictures/avatar.png";
import circle from '../Pictures/circle.png';

export const Card = ({ person, toggleFollowing, userIsFollowed }) => {
  const { id, user, followers, tweets, avatar } = person;
  const tweetsToShow = new Intl.NumberFormat('en-US').format(tweets);
  const followersToShow = new Intl.NumberFormat('en-US').format(followers);

  return (
    <CardContainer>
      <CardLine />
      <Avatar>
        <AvatarCircle src={circle} alt="circle" />
        <AvatarImg src={avatar} alt="user's avatar" />
      </Avatar>
      <UserName>{user}</UserName>
      <Tweets> {tweetsToShow} tweets </Tweets>
      <Followers>{followersToShow} Followers</Followers>
      <Button
        style={{
          backgroundColor: userIsFollowed ? '#5CD3A8' : '#EBD8FF',
        }}
        onClick={() => toggleFollowing(id)}
      >
        {userIsFollowed ? 'Following' : 'Follow'}
      </Button>
    </CardContainer>
  );
};
