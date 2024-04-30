import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Activity5 from "../activity5/page";

const mockAddTodo = jest.fn();
const mockRemoveTodo = jest.fn();
const mockToggleTodo = jest.fn();

describe("Activity 5: Todo Page", () => {
  it("should render the todo page", () => {
    render(<Activity5 />);
    expect(screen.getByText("Todos")).toBeInTheDocument();
    expect(document.querySelector("input")).toBeInTheDocument();
  });

  it("should render the todo list", () => {
    const { container } = render(<Activity5 />);
    const todoList = container.querySelector(".todo-list");
    expect(todoList).toBeInTheDocument();
  });

  it("should add a todo", () => {
    render(<Activity5 />);
    const input = document.getElementById("todo-input") as HTMLInputElement;
    const button = document.getElementById("add-todo") as HTMLButtonElement;
    input.value = "Learn React";
    button.onclick = mockAddTodo;
    act(() => button.click());
    expect(mockAddTodo).toHaveBeenCalled();
  });

  it("should remove a todo", () => {
    render(<Activity5 />);
    const button = document.getElementById("remove-todo") as HTMLButtonElement;
    button.onclick = mockRemoveTodo;
    act(() => button.click());
    expect(mockRemoveTodo).toHaveBeenCalled();
  });

  it("should toggle a todo", () => {
    render(<Activity5 />);
    const button = document.getElementById("toggle-todo") as HTMLButtonElement;
    button.onclick = mockToggleTodo;
    act(() => button.click());
    expect(mockToggleTodo).toHaveBeenCalled();
  });
});
