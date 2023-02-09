import FadeLoader from 'react-spinners/FadeLoader';
export const Loader = () => {
  return (
    <FadeLoader
      color="black"
      size={150}
      cssOverride={{
        margin: '0 auto',
      }}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
