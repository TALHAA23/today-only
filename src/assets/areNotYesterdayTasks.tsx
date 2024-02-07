export default function areNotYesterdayTask(): boolean {
  const readTasks = localStorage.getItem("myTasks");
  if (!readTasks) return false;
  const tasks = JSON.parse(readTasks);
  const dateTaskAddedOn = new Date(tasks.lastUpdatetoLocalStorage).getDate();
  const now = new Date().getDate();

  return dateTaskAddedOn == now ? true : false;
}
