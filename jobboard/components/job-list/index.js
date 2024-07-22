"use client";

import React from "react";
import PostNewJobs from "../post-new-job";
import RecruiterJobCard from "../../components/recruiterJobCard";
import CandidateJobCard from "../candidateJobCard/index";

function JobListing({ user, profileUser, jobList }) {


  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex items-baseline  justify-between border-b border-gray-200 pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          {profileUser?.role === "candidate"
            ? "Explore All Jobs"
            : "Jobs Dashboard"}
        </h1>

        <div className="flex items-center">
          {profileUser?.role === "candidate" ? (
            <h1>Filter</h1>
          ) : (
            <PostNewJobs profileUser={profileUser} user={user} />
          )}
        </div>
      </div>
      <div className="">
        <div className="pt-6 pb-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div className="lg:col-span-4">
              <div className="container mx-auto p-0 space-y-8">
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                  {jobList && jobList.length > 0 ? (
                    jobList.map((jobItem, index) => (
                      <div key={index}>
                        {profileUser?.role === "candidate" ? (
                          <CandidateJobCard jobList={jobItem}/>
                        ) : (
                          <RecruiterJobCard jobList={jobItem} />
                        )}
                      </div>
                    ))
                  ) : (
                    <p>No jobs available.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobListing;
