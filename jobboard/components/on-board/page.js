"use client";
import CommonForm from "../common-form/index";
import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { recruiterOnBoardFormControls } from "../../app/utils";

function OnBoard() {
    const intialRecruiterFormData = {
      name: "",
      companyName: "",
      companyRole: "",
    };
  const [currentTab, setCurrentTab] = useState("candidate");
  const [recruiterFormData, SetRecruiterFormData] = useState(
    intialRecruiterFormData
  );

  function handleTabChange(value) {
    setCurrentTab(value);
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
        <TabsContent value="candidate">candidate</TabsContent>
        <TabsContent value="recruiter">
          <CommonForm
            formControl={recruiterOnBoardFormControls}
            buttonText={"Onboard as Recruiter"}
            formData={recruiterFormData}
            setFormData={SetRecruiterFormData}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default OnBoard;
