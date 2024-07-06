"use client";

import React from "react";
import PostNewJobs from "../post-new-job";

function JobListing({ user, profileInfo }) {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex items-baseline  justify-between border-b border-gray-200 pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          {profileInfo?.role === "candidate"
            ? "Explore All Jobs"
            : "Jobs Dashboard"}
        </h1>

        <div className="flex items-center">
          {profileInfo?.role === "candidate" ? (
            <h1>Filter</h1>
          ) : (
            <PostNewJobs />
          )}
        </div>
      </div>
      <div className="">
        New Job Post

      </div>
    </div>
  );
}

export default JobListing;
