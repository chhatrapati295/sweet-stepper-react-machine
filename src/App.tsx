import Stepper, { IStepper } from "./components/Stepper";

function App() {
  const STEPPER_DATA: IStepper[] = [
    {
      label: "Step 1",
      content: "Here is the content of step 1",
    },
    {
      label: "Step 2",
      content: "Here is the content of step 2",
    },
    {
      label: "Step 3",
      content: "Here is the content of step 3",
    },
  ];

  return (
    <main className="m-4">
      <Stepper data={STEPPER_DATA} />
    </main>
  );
}

export default App;
