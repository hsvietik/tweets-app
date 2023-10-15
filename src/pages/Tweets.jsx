import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';

import { fetchUsers, updateUser } from '../services/api';
import { UsersList } from '../components/UsersList/UsersList';
import { Loader } from '../components/Loader/Loader';
import { LoadMore } from '../components/LoadMore/LoadMore';
import { BackButton } from '../components/BackButton/BackButton';

function Tweets() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [followings, setFollowings] = useState(() => {
    return JSON.parse(window.localStorage.getItem('followings')) ?? [];
  });
  const [end, setEnd] = useState(3);
  const [usersToShow, setUsersToShow] = useState([]);

  const loadMore = () => {
    setEnd(end + 3);
  };

  const toggleFollowing = userId => {
    const userIsFollowed = followings.includes(userId);
    const userToChange = users.find(user => user.id === userId);
    if (userIsFollowed) {
      setFollowings(followings.filter(followingId => followingId !== userId));
      userToChange.followers = userToChange.followers - 1;
    } else {
      setFollowings(followings.concat(userId));
      userToChange.followers = userToChange.followers + 1;
    }
    async function changeUser() {
      try {
        await updateUser(userId, userToChange);
      } catch (err) {
        toast.error(`Oops, something went wrong.`);
      }
    }
    changeUser();
  };

  useEffect(() => {
    async function loadUsers() {
      try {
        setIsLoading(true);
        const response = await fetchUsers();
        setUsers(response.data);
      } catch (err) {
        toast.error(`Oops, something went wrong.`);
      } finally {
        setIsLoading(false);
      }
    }
    loadUsers();
  }, []);

  useEffect(() => {
    window.localStorage.setItem('followings', JSON.stringify(followings));
    setUsersToShow(users.slice(0, end));
  }, [followings, users, end]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <section>
          <BackButton />
          <UsersList
            usersToShow={usersToShow}
            toggleFollowing={toggleFollowing}
            followings={followings}
          />
          {end < users.length && <LoadMore loadMore={loadMore} />}
        </section>
      )}

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default Tweets;
