"use client";
import CommonForm from "../common-form/index";
import { useEffect, useState } from "react";
import { createProfile } from "../../actions";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  recruiterOnBoardFormControls,
  intialRecruiterFormData,
  candidateOnBoardFormControls,
  intialCandidateFormData,
} from "../../app/utils";
import { useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

// Super Base Connect and data fetching
const supabaseClient = createClient(
  "https://sryiamjazprkcnlsyixl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyeWlhbWphenBya2NubHN5aXhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAzMzQ1MDYsImV4cCI6MjAzNTkxMDUwNn0.h5LKQu3HN0tJ0C2kxhPjmh4cUYfyQNSEPQjIQwzuBH4"
);

function OnBoard() {
  const [currentTab, setCurrentTab] = useState("candidate");
  const [recruiterFormData, SetRecruiterFormData] = useState(
    intialRecruiterFormData
  );
  const [candidateFormData, SetCandidateFormData] = useState(
    intialCandidateFormData
  );
  const [file, setfile] = useState(null);
  const currentUser = useUser();
  const { user } = currentUser;

  function handleTabChange(value) {
    setCurrentTab(value);
  }

  //  Super Base File Handling
  function handleFileChange(event) {
    event.preventDefault();
    setfile(event.target.files[0]);
  }

  // File Uplaoding To SupaBase

  async function handleFileUploadToSupabase() {
    const { data, error } = await supabaseClient.storage
      .from("Job-Portal")
      .upload(`/public/${file.name}`, file, {
        cacheControl: "3600",
        upsert: false,
      });

    console.log(data, error);
    if (data) {
      SetCandidateFormData({
        ...candidateFormData,
        resume: data.path,
      });
    }
  }

  useEffect(() => {
    if (file) {
      handleFileUploadToSupabase();
    }
  }, [file]);

  function handleRecuiterFormValid() {
    return (
      recruiterFormData &&
      recruiterFormData.name.trim() !== "" &&
      recruiterFormData.companyName.trim() !== "" &&
      recruiterFormData.companyRole.trim() !== ""
    );
  }

  function handleCandidateFormValid() {
    return  Object.keys(candidateFormData).every(key=> candidateFormData[key].trim() !== "")
  }

  async function createProfileAction() {
    const data =
      currentTab === "candidate"
        ? {
            candidateInfo: candidateFormData,
            role: "candidate",
            isPremiumUser: false,
            userId: user?.id,
            email: user?.primaryEmailAddress?.emailAddress,
          }
        : {
            recruiterInfo: recruiterFormData,
            role: "recruiter",
            isPremiumUser: false,
            userId: user?.id,
            email: user?.primaryEmailAddress?.emailAddress,
          };

    await createProfile(data, "/onboard");
  }

  return (
    <div className="w-full">
      <Tabs value={currentTab} onValueChange={handleTabChange}>
        <div className="w-full">
          <div className="flex items-baseline justify-between border-b pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Welcome to Boarding
            </h1>
            <TabsList className="flex gap-1 items-center">
              <TabsTrigger value="candidate">Candidate</TabsTrigger>
              <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="candidate">
          <CommonForm
            formControl={candidateOnBoardFormControls}
            buttonText={"Onboard as Candidate"}
            formData={candidateFormData}
            setFormData={SetCandidateFormData}
            handleFileChange={handleFileChange}
            isBtnDisabled={!handleCandidateFormValid()}
            action={createProfileAction}
          />
        </TabsContent>
        <TabsContent value="recruiter">
          <CommonForm
            formControl={recruiterOnBoardFormControls}
            buttonText={"Onboard as Recruiter"}
            formData={recruiterFormData}
            setFormData={SetRecruiterFormData}
            isBtnDisabled={!handleRecuiterFormValid()}
            action={createProfileAction}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default OnBoard;
