import { Card } from "../Card/Card";
import { StyledList } from "./UsersList.styled";

export const UsersList = ({ usersToShow, toggleFollowing, followings }) => {
  return (
    <>
      <StyledList>
        {usersToShow.map((person) => {
          const userIsFollowed = followings.includes(person.id);
          if (followings.includes(person.id)) {
          }
          return (
            <li key={person.id}>
              <Card
                person={person}
                toggleFollowing={toggleFollowing}
                userIsFollowed={userIsFollowed}
              />
            </li>
          );
        })}
      </StyledList>
    </>
  );
};
