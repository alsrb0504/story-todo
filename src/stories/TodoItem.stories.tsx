/* eslint-disable storybook/story-exports */
import type { Meta, StoryObj } from "@storybook/react";
import TodoItem from "../components/TodoItem";

const meta: Meta<typeof TodoItem> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "TodoItem",
  component: TodoItem,
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

export const Basic: Story = {
  render: () => (
    <TodoItem
      todo={{ todoId: 1, text: "first Todo", isChecked: false }}
      onClickTodo={(todoId) => {}}
      onDeleteTodo={(todoId) => {}}
      onUpdateTodo={(todoId, updatedText) => {}}
    />
  ),
};

export const Checked: Story = {
  render: () => (
    <TodoItem
      todo={{ todoId: 2, text: "Checked Todo", isChecked: true }}
      onClickTodo={(todoId) => {}}
      onDeleteTodo={(todoId) => {}}
      onUpdateTodo={(todoId, updatedText) => {}}
    />
  ),
};
