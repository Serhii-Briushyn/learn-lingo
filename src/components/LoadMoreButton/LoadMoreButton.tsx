interface Props {
  hasMore: boolean;
  onLoadMore: () => void;
}

const LoadMoreButton: React.FC<Props> = ({ hasMore, onLoadMore }) => {
  if (!hasMore) return null;

  const handleClick = () => {
    onLoadMore();
    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-accent text-black rounded-xl py-4 px-12 m-auto text-lg font-bold w-max cursor-pointer hover:bg-accent-light transition-all duration-300 ease-in"
    >
      Load More
    </button>
  );
};

export default LoadMoreButton;
