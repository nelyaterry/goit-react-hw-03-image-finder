import Loader from "react-loader-spinner";
import { Load } from "./Loader.styled";

const Download = () => {
  return (
    <Load>
      <Loader
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </Load>
  );
};

export default Download;
