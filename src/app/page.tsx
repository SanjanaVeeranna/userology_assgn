"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "react-feather";

export default function Home() {
  const [popUps, setPopUps] = useState([true]); // Initialize with the first popup

  const handleClose = (index: number) => {
    setPopUps((prevPopUps) =>
      prevPopUps.map((_, i) => (i === index ? false : _))
    );
  };

  const handleAdd = () => {
    setPopUps((prevPopUps) => [...prevPopUps, true]);
  };

  return (
    <div>
      <div>
        <div className="h-12 w-18 flex ">
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
          >
            Click here
          </button>

          {popUps.map((isPopUpVisible, index) =>
            isPopUpVisible ? (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="border fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-transparent bg-opacity-30"
              >
                <div className="flex h-56 w-56 flex-col items-center justify-center gap-y-4 rounded-lg bg-white">
                  <div className="font-bold text-black">{`Hello World ${
                    index + 1
                  }`}</div>

                  <div
                    onClick={() => handleClose(index)}
                    className="flex h-10 w-36 items-center justify-center rounded-lg bg-gray-300 cursor-pointer"
                  >
                    Close
                  </div>
                  <div
                    onClick={handleAdd}
                    className="flex h-10 w-36 cursor-pointer items-center justify-center rounded-md bg-blue-500 text-base"
                  >
                    <Plus />
                  </div>
                </div>
              </motion.div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
