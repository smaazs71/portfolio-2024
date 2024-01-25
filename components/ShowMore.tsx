"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext, setLimit, projectsPerPage }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 4;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName, { scroll: false });
  };

  return (
    <div className="w-full flex items-center justify-center gap-5 my-10">
      {isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-light px-6 py-4 rounded-full text-white"
          handleClick={() => setLimit((pageNumber + 1) * projectsPerPage)}
        />
      )}
    </div>
  );
};

export default ShowMore;
