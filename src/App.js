import React, { useState } from "react";
import CardList from "./CardList.js";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

function App() {
    const [robot, setRobot] = useState(robots);
   
    const onSearchChange = (event) => {
      const filterRobot = robots.filter(robots => {
        return robots.name.toLowerCase().includes(event.target.value.toLowerCase())
      })
      setRobot(filterRobot);
    }
    return (
      <div className="tc">
        <h1> RoboFriends </h1>
        <SearchBox searchChange={onSearchChange}/>
        <CardList robots={robot}/>
      </div>
    )
  }

export default App;
