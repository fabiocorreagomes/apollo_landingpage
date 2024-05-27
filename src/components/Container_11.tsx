import FAQ from "./FAQ"

export function Container11() {
    return (
        <div className="px-11 py-11 sm:px-11 md:px-[111px] lg:px-[300px] xl:px-[300px] items-center text-center font-sans">

        <div className=" mb-11">
            <h1 className="text-[44px] font-bold text-blue-600 text-shadow-md">FAQ:</h1>
        </div>

        <div>
            
        <FAQ />

        </div>

        <div className="mb-7">
            <button className="bg-blue-600 text-white font-sans p-4 rounded shadow-custom-light hover:shadow-custom-dark hover:bg-black hover:animate-pulse">
            Click here and change your life forever!
            </button>
        </div>

        </div>
    )
}