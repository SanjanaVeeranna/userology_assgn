"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "react-feather";

interface Popup {
  visible: boolean;
}

export default function Home() {
  const [popUps, setPopUps] = useState<Popup[]>([]); // Initialize with an empty array

  const handleClose = (index: number) => {
    setPopUps((prevPopUps) =>
      prevPopUps.map((popup, i) =>
        i === index ? { ...popup, visible: false } : popup
      )
    );
  };

  const handleAdd = () => {
    setPopUps((prevPopUps) => [
      ...prevPopUps,
      {
        visible: true,
      },
    ]);
  };

  return (
    <div className="h-screen w-full flex p-10 bg-gray-200">
      <div className="relative">
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg relative z-10"
        >
          Click here
        </button>
        {popUps.map((popup, index) =>
          popup.visible ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 top-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
            >
              <div className="flex flex-col items-center gap-y-4 rounded-lg bg-white p-6 shadow-lg">
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
  );
}
