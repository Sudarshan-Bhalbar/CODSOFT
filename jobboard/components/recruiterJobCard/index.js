import React from "react";
import CommonCard from "../common-card";
import { Button } from "../ui/button";
import JobIcon from "../jobIcon";

function RecruiterJobCard({ jobList }) {
  return (
    <CommonCard
      title={jobList?.title}
      icon={<JobIcon width={100} height={100} />}
      description={jobList?.description}
      footerContent={
        <Button className="h-11 flex justify-center items-center px-5 text-gray-800 border-2 bg-blue-100 border-blue-300 shadow-lg shadow-blue-200 hover:bg-blue-300 hover:shadow-blue-300">
          10 Applicants
        </Button>
      }
    />
  );
}

export default RecruiterJobCard;
