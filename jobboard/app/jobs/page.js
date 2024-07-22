import React from "react";
import JobListing from "../../components/job-list";
import { currentUser } from "@clerk/nextjs/server";
import {
  fetchJobsForCandidateAction,
  fetchJobsForRecruiterAction,
  fetchProfileAction,
} from "../../actions";

const Job = async () => {
  const user = await currentUser();
  const profileUser = await fetchProfileAction(user?.id);

  const jobList =
    profileUser?.role === "candidate"
      ? await fetchJobsForCandidateAction()
      : await fetchJobsForRecruiterAction(user?.id);

  return (
    <JobListing
      user={JSON.parse(JSON.stringify(user))}
      profileUser={profileUser}
      jobList={JSON.parse(JSON.stringify(jobList))}
    />
  );
};

export default Job;
