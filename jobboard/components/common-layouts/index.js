import { currentUser } from "@clerk/nextjs/server";
import Header from "../header/page";

async function CommonLayout({ childern }) {
  const user = await currentUser();
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      {/* Header Component */}
      <Header user={JSON.parse(JSON.stringify(user))} />
      {/* Header Component */}
      {/* Main Component */}
      <main className="h-full flex justify-start items-center pt-6">
        {childern}
      </main>
      {/* Main Component */}
    </div>
  );
}

export default CommonLayout;
