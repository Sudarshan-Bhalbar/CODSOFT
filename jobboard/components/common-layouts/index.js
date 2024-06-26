import Header from "../header/page"


const commonLayout = ({ childern }) => {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
        {/* Header Component */}
            <Header/>
        {/* Header Component */}


        {/* Main Component */}
            <main className="w-screen h-full flex justify-center items-center pt-6">{ childern }</main>
        {/* Main Component */}


    </div>
  )
}

export default commonLayout;