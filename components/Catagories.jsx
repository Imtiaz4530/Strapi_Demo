"use client";

import { useContext, useLayoutEffect } from "react";
import Category from "./Category";
import { CategoryContext } from "@/context/CategoryContext";

const Catagories = ({ catagories }) => {
  const { changeCategory } = useContext(CategoryContext);

  useLayoutEffect(() => {
    changeCategory(catagories?.data[0]?.attributes.Title);
  }, []);
  return (
    <div className="flex gap-6 mb-8">
      {catagories?.data.map((catagory) => (
        <div key={catagory.id}>
          <Category cat={catagory} />
        </div>
      ))}
    </div>
  );
};

export default Catagories;
