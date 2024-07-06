"use server";

import { revalidatePath } from "next/cache";
import  connectToDB  from "../database";
import  Profile  from "../models/profile";

// Creating profile Action
export async function createProfile(formData, pathToRevalidate) {
  await connectToDB();
  await Profile.create(formData);
  revalidatePath(pathToRevalidate);
}


export async function fetchProfileAction(id) {
    await  connectToDB();
    const result = await Profile.findOne({userId : id});

    return JSON.parse(JSON.stringify(result));
}