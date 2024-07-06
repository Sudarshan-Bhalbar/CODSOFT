"use client";
import CommonForm from "../common-form/index";
import { useState } from "react";
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

function OnBoard() {
  const [currentTab, setCurrentTab] = useState("candidate");
  const [recruiterFormData, SetRecruiterFormData] = useState(
    intialRecruiterFormData
  );
  const [candidateFormData, SetCandidateFormData] = useState(
    intialCandidateFormData
  );

  const currentUser = useUser();
  const { user } = currentUser;

  function handleTabChange(value) {
    setCurrentTab(value);
  }

  function handleRecuiterFormValid() {
    return (
      recruiterFormData &&
      recruiterFormData.name.trim() !== "" &&
      recruiterFormData.companyName.trim() !== "" &&
      recruiterFormData.companyRole.trim() !== ""
    );
  }

  async function createProfileAction() {
    const data = {
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
