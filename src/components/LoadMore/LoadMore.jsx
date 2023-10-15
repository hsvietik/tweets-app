import { LoadMoreButton } from "./LoadMore.styled";

export const LoadMore = ({ loadMore }) => {
  return (
    <>
      <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>
    </>
  );
};
