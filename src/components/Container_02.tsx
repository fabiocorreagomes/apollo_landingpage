export function Container02() {
    return (
        <div className="grid place-items-center pt-11 pb-11 font-sans">
            <div className="p-4">
                <iframe
                    className="sm:w-full sm:h-full md:w-[640px] md:h-[340px] lg:w-[640px] lg:h-[340px]"
                    src="https://www.youtube.com/embed/Y6mihRBWw-Y?si=MYkulkxQhg8rV8JC"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="mt-11">
                    <button className="bg-blue-600 text-white font-sans p-4 rounded shadow-custom-light hover:shadow-custom-dark hover:bg-black hover:animate-pulse">
                    Click here and change your life forever!
                </button>
            </div>

        </div>
    )
}