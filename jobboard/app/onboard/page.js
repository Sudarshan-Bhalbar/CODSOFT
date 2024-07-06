import { useUser } from "@clerk/nextjs";
import { fetchProfileAction } from "../../actions/index";
import OnBoard from "../../components/on-board/page";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const onBoardPage = async () => {
  // Get The Auth User
  const user = await currentUser();

  // Fetching the profile info ------> user is Candidate || user is Recruiter

  const profileInfo = await fetchProfileAction(user?.id);

  if (profileInfo?._id) {
    if (profileInfo?.role === "recruiter" && !profileInfo.isPremiumUser) {
      redirect("/membership");
    } else {
      redirect("/");
    }
  } else {
    return <OnBoard />;
  }
};

export default onBoardPage;
