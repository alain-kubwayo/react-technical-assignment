import { queryOptions } from "@tanstack/react-query";
import { BASE_API_URL } from "../core/constants";

export const sampleTasksQuery = () =>
  queryOptions({
    queryKey: ["sampleTasks"],
    queryFn: async () => {
      const response = await fetch(`${BASE_API_URL}/todos?limit=10`);
      const data = await response.json();
      return data;
    },
    enabled: false,
  });

export const deleteTaskMutation = async (id: number) => {
  await fetch(`${BASE_API_URL}/todos/${id}`, {
    method: "DELETE",
  });
};
