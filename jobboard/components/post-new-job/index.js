import React, { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogTitle } from "@radix-ui/react-dialog";

import { initialpostNewJobFormData } from "../../app/utils";

const PostNewJobs = () => {
  const [showJobDailog, setShowJobDailog] = useState(false);
  const [jobFormData, setJobFormData] = useState(initialpostNewJobFormData);

  return (
    <div>
      <Button className="disabled:opacity-65 h-11 flex justify-center items-center px-5">
        Post A Job
      </Button>
      <Dialog
        open={showJobDailog}
        onOpenChange={() => {
          setShowJobDailog(false);
        }}
      ></Dialog>
    </div>
  );
};

export default PostNewJobs;
