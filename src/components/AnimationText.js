import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Muhammad Khalil",
          "Full Stack Developer",
          "WordPress Developer",
          "Graphics Designer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
