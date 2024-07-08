import "../assets/index.css"
function MainIntro() {
    return (
        <div className="backimg">
            <section
                className="bg-transparent">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We
                        collected world’s best potential books</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-white">Here in this
                        rich Book store you can find unique books all around the world.</p>
                </div>

                <div
                    className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-32 absolute top-0 left-0 z-0"></div>

            </section>
            <br/>
            <div className="blur-background">
                <h1 className="  text-3xl font-extrabold  dark:text-slate-700 mt-10 md:text-5xl lg:text-6xl text-center"><span
                    className="  text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better reading </span>
                    When you have joyBook </h1>
                <br/>
                <p className="font-bold text-lg  text-gray-500 lg:text-xl dark:text-slate-900 text-center">Here at
                    joyBook
                    we focus on
                    markets where people that loves books and help them to find bests.</p>
                <br/>
                <br/>
                <div className="flex justify-center flex-shrink-0 mt-3 mb-3 ">
                    <img className="max-w-32 h-32  rounded-3xl  justify-center "
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt="Rounded avatar"/>

                    <blockquote
                        className=" text-center text-lg italic font-semibold text-gray-900 w-96 dark:text-black">
                        <p>"joyBook is just awesome. It contains tons of books that i couldn't find anywhere else . Perfect choice for everyone "</p>
                        <span className="">"David"</span>
                    </blockquote>
                </div>

            </div>
        </div>
    )
}

export default MainIntro;