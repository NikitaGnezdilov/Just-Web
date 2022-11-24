import React from "react";
import Chats from "../components/Chats/Chats";
import Sidebar from "../components/Sidebar/Sidebar";

type Props = {};

const Home: React.FC = (props: Props) => {
  return (
    <div className="homepage">
      <Sidebar />
      <Chats />
    </div>
  );
};

export default Home;
