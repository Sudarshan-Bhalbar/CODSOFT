import React from "react";
import JobListing from "../../components/job-list";
import { currentUser } from "@clerk/nextjs/server";
import {fetchProfileAction} from "../../actions";

const Job = async () => {
  const user = await currentUser();
  const profileUser = await fetchProfileAction(user?.id);

  return (
    <JobListing
      user={JSON.parse(JSON.stringify(user))}
      profileUser={profileUser}
    />
  );
};

export default Job;
