import { TODO_PATH } from "../constants/consts";
import { Todo } from "../models/todoModel";
import RequestHandler from "./requestHandler";

class TodoService {
  static async getTasksByUserId(userId: number): Promise<Todo[] | undefined> {
    const todos = await RequestHandler.sendRequest<Todo[]>(TODO_PATH, 'GET') || [];
    const userTodos = todos
      .filter((todo) => todo.userId === userId)
      .slice(0, 10);
    return userTodos;
  }
}

export default TodoService;
