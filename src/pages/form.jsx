import ServiceForm from "../components/ServiceForm/ServiceForm";
import BG from "../assets/Form-BG.jpg";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function Form(props) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        backgroundImage: `url("${BG}")`,
      }}
    >
      <ReactNotifications />
      <ServiceForm data={props.data} />
    </div>
  );
}

export default Form;
