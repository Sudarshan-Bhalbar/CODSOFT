import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";

import {
  initialpostNewJobFormData,
  postNewJobFormControls,
} from "../../app/utils";
import CommonForm from "../common-form";
import { postNewJobAction } from "../../actions";

const PostNewJobs = ({ profileUser, user }) => {
  const [showJobDailog, setShowJobDailog] = useState(false);
  const [jobFormData, setJobFormData] = useState({
    ...initialpostNewJobFormData,
    companyName: profileUser?.recruiterInfo?.companyName,
  });


  async function createNewJobs() {
    await postNewJobAction(
      {
        ...jobFormData,
        recruiterId: user?.id,
        applicants: [],
      },
      "/jobs"
    );

    setJobFormData({
      ...initialpostNewJobFormData,
      companyName: profileUser?.recruiterInfo?.companyName,
    });
    setShowJobDailog(false)
  }

  return (
    <div>
      <Button
        onClick={() => {
          setShowJobDailog(true);
        }}
        className="disabled:opacity-65 h-11 flex justify-center items-center px-5 text-gray-800 border-2 bg-blue-100 border-blue-300 shadow-lg shadow-blue-200 hover:bg-blue-300 hover:shadow-blue-300"
      >
        Post A Job
      </Button>
      <Dialog
        open={showJobDailog}
        onOpenChange={() => {
          setShowJobDailog(false);
          setJobFormData({
            ...initialpostNewJobFormData,
            companyName: profileUser?.profileUser?.recruiterInfo?.companyName,
          });
        }}
      >
        <DialogContent className="sm:max-w-screen-md h-[600px] overflow-auto">
          <DialogHeader>
            <DialogTitle>Post New Job</DialogTitle>
            <div className="grid gap-4 py-4">
              <CommonForm
                buttonText={"Add"}
                formData={jobFormData}
                setFormData={setJobFormData}
                formControl={postNewJobFormControls}
                action={createNewJobs}
              />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostNewJobs;
