"use server";

import { revalidatePath } from "next/cache";
import connectToDB from "../database";
import Profile from "../models/profile";
import Job from "../models/job";

// Creating profile Action
export async function createProfile(formData, pathToRevalidate) {
  await connectToDB();
  await Profile.create(formData);
  revalidatePath(pathToRevalidate);
}

export async function fetchProfileAction(id) {
  await connectToDB();
  const result = await Profile.findOne({ userId: id });

  return JSON.parse(JSON.stringify(result));
}

// Create JOB Actions

export async function postNewJobAction(formData, pathToRevalidate) {
  await connectToDB();
  await Job.create(formData);
  revalidatePath(pathToRevalidate);
}

// Fetch Job Actions

// Recruiter

export async function fetchJobsForRecruiterAction(id) {
  await connectToDB();
  const result = await Job.find({ recruiterId: id });

  return JSON.parse(JSON.stringify(result));
}

// Candidte

export async function fetchJobsForCandidateAction() {
  await connectToDB();
  const result = await Job.find({});

  return JSON.parse(JSON.stringify(result));
  
}
