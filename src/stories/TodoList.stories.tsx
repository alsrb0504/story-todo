/* eslint-disable storybook/story-exports */
import type { Meta, StoryObj } from "@storybook/react";
import App from "../App";

const meta: Meta<typeof App> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "TodoList",
  component: App,
};

export default meta;
type Story = StoryObj<typeof App>;

export const Basic: Story = {
  render: () => <App />,
};

export const Empty: Story = {
  render: () => <App todos={[]} />,
};

export const List: Story = {
  render: () => (
    <App
      todos={[
        {
          todoId: 324,
          text: "오늘 할 일",
          isChecked: false,
        },
        {
          todoId: 124,
          text: "출근하기...",
          isChecked: false,
        },
        {
          todoId: 980,
          text: "퇴근하기!",
          isChecked: false,
        },
        {
          todoId: 324,
          text: "오늘 할 일",
          isChecked: false,
        },
        {
          todoId: 124,
          text: "출근하기...",
          isChecked: false,
        },
        {
          todoId: 980,
          text: "퇴근하기!",
          isChecked: false,
        },
        {
          todoId: 324,
          text: "오늘 할 일",
          isChecked: false,
        },
        {
          todoId: 124,
          text: "출근하기...",
          isChecked: false,
        },
        {
          todoId: 980,
          text: "퇴근하기!",
          isChecked: false,
        },
      ]}
    />
  ),
};

// export const Checked: Story = {
// render: () => (
// <TodoItem
// todo={{ todoId: 2, text: "Checked Todo", isChecked: true }}
// onClickTodo={(todoId) => {}}
// onDeleteTodo={(todoId) => {}}
// onUpdateTodo={(todoId, updatedText) => {}}
// />
// ),
// };
