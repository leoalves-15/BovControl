import { useEffect, useState } from "react";
import { task } from "../types/Task.type";
import { getTask } from "../services/getTask";
import { useUrl } from "./use-url";

export function useCurrentTask() {
  const [currentTask, setCurrentTask] = useState<task>();
  const { url } = useUrl();
  const id = parseInt(url.split("id=")[1]);

  useEffect(() => {
    const load = async () => {
      setCurrentTask(await getTask(id));
    };
    if(id) load();
  }, [id]);

  return {
    currentTask,
  };
}
