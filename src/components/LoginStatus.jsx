import { useContext } from "react";
import { StatusContext } from "./contexts/StatusContext";

export const LoginStatus = () => {
  const { status } = useContext(StatusContext);
  return (
    <div>
      <div>
        User currently:{" "}
        {status ? `logged in and token is${status}` : `logged out`}{" "}
      </div>
    </div>
  );
};
