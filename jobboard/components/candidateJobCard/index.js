"use client";

import { Fragment, useState } from "react";
import CommonCard from "../common-card";
import JobIcon from "../jobIcon";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

function CandidateJobCard({ jobList }) {
  const [showJobDetailsDrawer, setShowJobDetailsDrawer] = useState(false);

  return (
    <Fragment>
      <Drawer
        open={showJobDetailsDrawer}
        onOpenChange={setShowJobDetailsDrawer}
      >
        <CommonCard
          icon={<JobIcon width={50} height={50} />}
          title={jobList?.title}
          description={jobList?.description.trim().slice(0, 45) + "..."}
          footerContent={
            <DrawerTrigger>
              <Button className="h-11 flex justify-center items-center px-5 text-gray-800 border-2 bg-blue-100 border-blue-300 shadow-lg shadow-blue-200 hover:bg-blue-300 hover:shadow-blue-300">
                View Details
              </Button>
            </DrawerTrigger>
          }
        />

        <DrawerContent className="p-6">
          <DrawerHeader className="px-0">
            <div className="flex justify-between">
              <DrawerTitle className="text-4xl font-extrabold text-gray-800">
                {jobList?.title}
              </DrawerTitle>
              <div className="flex gap-3">
                <Button className="h-11 flex justify-center items-center px-5 text-gray-800 border-2 bg-green-200 border-green-400 shadow-lg shadow-green-200 hover:bg-green-400 hover:shadow-green-300">
                  Apply
                </Button>
                <Button
                  onClick={() => {
                    setShowJobDetailsDrawer(false);
                  }}
                  className="h-11 flex justify-center items-center px-5 text-gray-800 border-2 bg-red-200 border-red-400 shadow-lg shadow-red-200 hover:bg-red-400 hover:shadow-red-300"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}

export default CandidateJobCard;
