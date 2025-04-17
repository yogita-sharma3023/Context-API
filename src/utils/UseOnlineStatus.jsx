import { useEffect } from "react";
import { useState } from "react";

const UserOnlineStatus = () => {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setStatus(true);
    });
    window.addEventListener("offline", () => {
      setStatus(false);
    });
  });
  return status;
};
export default UserOnlineStatus;
