import React, { useEffect, useState, useRef } from "react";
import { Task } from "../components/Task";
import { getTasks } from "../services/getAll";
import { task } from "../types/Task.type";
import { ContainPage } from "../styles/generic-components";
import { PageTitle } from "../styles/generic-components";
import { AddTask } from "../components/AddTask";
import Spinner from "../components/Spinner";

const Home = () => {
  const [allTasks, setAllTasks] = useState<task[]>([]);
  const [render, setRender] = useState(false);

  const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);

  const contain = useRef(null);
  const executeScroll = () => scrollToRef(contain);

  const load = async () => {
    setAllTasks(await getTasks());
  };

  useEffect(() => {
    load();
    executeScroll();
  }, [render]);

  return (
    <ContainPage ref={contain}>
      <PageTitle>Wellcome, these are your tasks.</PageTitle>
      <AddTask />
      {!allTasks[0] && <Spinner />}
      {allTasks.map((task) => {
        return (
          <Task
            id={task._id || "-1"}
            key={task._id}
            farmerName={task.from.name}
            farmName={task.farmer.name}
            city={task.farmer.city}
            createDate={task.created_at}
            setRender={setRender}
          />
        );
      })}
    </ContainPage>
  );
};

export default Home;
