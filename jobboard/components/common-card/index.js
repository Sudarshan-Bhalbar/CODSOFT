import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const CommonCard = ({ title, icon, description, footerContent }) => {

    console.log(title, description);
  return (
    <Card className="flex bg-gray-100 flex-col gap-6 rounded-2xl p-8 transtion duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
      <CardHeader className="p-0">
        {icon ? icon : null}
        {title ? (
          <CardTitle className="text-xl max-w-[200px] text-ellipsis overflow-hidden whitespace-nowrap text-gray-950">
            {title}
          </CardTitle>
        ) : null}
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardFooter className="p-0">{footerContent}</CardFooter>
    </Card>
  );
};

export default CommonCard;
