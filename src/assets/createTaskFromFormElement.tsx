import guessTimeofDayFromTheTask from "./guessTimeofDayForTheTask";
import { Task } from "./types";
import { uid } from "uid";

export default function createTaskFromFormElement(formData: FormData): Task {
  const id = uid();
  const title = formData.get("title") || "No Title";
  const taskLabel = formData.get("taskLabel") || "routine";
  const openAt = formData.get("openAt")?.toString() || "12";
  const status = "pending";
  const timeofDay = guessTimeofDayFromTheTask(parseInt(openAt));

  return {
    id,
    title,
    taskLabel,
    timeofDay,
    openAt,
    status,
  };
}
