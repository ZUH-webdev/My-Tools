
export default function Hero({
  title,
  image,
  buttonText,
  onScroll,
 paragraphs = []
}) {
  return (
    <section className="relative w-full pt-4 mt-14 min-h-screen   bg-[#f5f7ff] font-manrope">
      <div className="max-w-7xl mx-auto pt-35 px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight mb-4 font-space-grotesk">
              {title}
            </h1>

            {paragraphs.map((para, i) => (
            <p
              key={i}
              className="mb-3 text-gray-600 leading-relaxed"
            >
              {para}
            </p>
          ))}

            {buttonText && (
              <button
                onClick={onScroll}
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-indigo-600 text-white font-medium rounded-full transition hover:bg-indigo-700"
              >
                {buttonText}
                <span>→</span>
              </button>
            )}
          </div>

          <div className="flex justify-center">
            <img
              src={image}
              alt={title}
              className="w-105 max-w-full" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
