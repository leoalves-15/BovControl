import React, { useEffect, useState } from "react";
import { Task } from "../components/Task";
import { getTasks } from "../services/getAll";
import { task } from "../types/Task.type";
import { ContainPage } from "../styles/generic-components";
import { PageTitle } from "../styles/generic-components";
import { AddTask } from "../components/AddTask";

const Home = () => {
  const [allTasks, setAllTasks] = useState<task[]>([]);

  useEffect(() => {
    const load = async () => {
      setAllTasks(await getTasks());
    };
    load();
  }, []);

  return (
    <ContainPage>
      <PageTitle>Wellcome, these are your tasks.</PageTitle>
      <AddTask />
      {allTasks.map((task) => {
        return (
          <Task
            id={task._id || -1}
            key={task._id}
            farmerName={task.from.name}
            farmName={task.farmer.name}
            city={task.farmer.city}
            createDate={task.created_at}
          />
        );
      })}
    </ContainPage>
  );
};

export default Home;
