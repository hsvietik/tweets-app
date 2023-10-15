import ClockLoader from "react-spinners/ClockLoader";

export const Loader = () => {
  return (
    <ClockLoader
      color="#4b2a99"
      cssOverride={{
        left: "50%",
        position: "absolute",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
      size={160}
      speedMultiplier={0.4}
    />
  );
};
