import { VFC } from "react";

const Mypage: WithGetAccessControl<VFC> = (props) => {
  return <div>...</div>;
};

Mypage.getAccessControl = () => {
  return !isLoggedIn() ? { type: "replace", destination: "/signin" } : null;
};

export default Mypage;
