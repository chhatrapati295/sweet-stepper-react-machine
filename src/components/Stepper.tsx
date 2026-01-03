import { useCallback, useState } from "react";

export interface IStepper {
  label: string;
  content: string;
}

interface IStepperData {
  data: IStepper[];
}

const Stepper = ({ data }: IStepperData) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleGoBack = useCallback(() => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  }, []);
  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  }, []);

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-4">
        {data?.map((item: IStepper, index: number) => {
          return (
            <div key={index} className="flex justify-center items-center gap-2">
              <div className="flex gap-2 items-center">
                <div
                  className={`rounded-full h-8 w-8  flex justify-center items-center relative ${
                    index <= activeIndex ? "bg-green-300" : "bg-gray-200"
                  }`}
                >
                  {index + 1}
                  {index !== data?.length - 1 && (
                    <div
                      className={`absolute top-full h-4 w-1 ${
                        index < activeIndex ? "bg-green-300" : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </div>
                <span>{item?.label}</span>
              </div>
            </div>
          );
        })}
      </div>
      <p className="bg-gray-100 p-12 rounded-md">
        {data?.[activeIndex]?.content}
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-left">
          <button
            className={`border rounded-md p-2 text-sm ${
              activeIndex <= 0 ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => handleGoBack()}
            disabled={activeIndex <= 0}
          >
            Go back
          </button>

          <button
            className={`border rounded-md p-2 text-sm ${
              activeIndex >= data?.length - 1
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={() => handleNext()}
            disabled={activeIndex >= data?.length - 1}
          >
            Go Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
