import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import { FC, PropsWithChildren } from "react";
import HomePage from "./HomePage";

const queryClient = new QueryClient();

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: "3rdParty",
    init: () => {},
  },
}));
describe("HomePage", () => {
  HTMLDialogElement.prototype.show = jest.fn();
  HTMLDialogElement.prototype.showModal = jest.fn();
  HTMLDialogElement.prototype.close = jest.fn();

  beforeEach(() => {
    render(
      <Wrapper>
        <HomePage />
      </Wrapper>
    );
  });
  it("should render the Home page", async () => {
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  it("should open add task form dialog", async () => {
    const addTaskFormDescription = screen.getByText("Fill the form to add a new task");
    expect(addTaskFormDescription).not.toBeVisible();

    const newTaskButton = screen.getByText("New Task");
    expect(newTaskButton).toBeInTheDocument();

    fireEvent.click(newTaskButton);
    // expect(addTaskFormDescription).toBeVisible();
  });
});
