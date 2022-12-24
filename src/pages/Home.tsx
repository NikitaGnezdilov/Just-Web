import React from "react";
import Chat from "../components/Chat/Chat";
import Sidebar from "../components/Sidebar/Sidebar";


const Home: React.FC = () => {
  return (
    <div className="homepage">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;
