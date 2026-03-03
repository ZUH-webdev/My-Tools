
export default function BottomSection({ image, title, paragraphs = [] }) {
  return (
  <section className="w-full bg-[#f5f7ff] py-14 font-manrope">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10">
        
        
        <img
          src={image}
          alt={title}
          className="w-full max-w-sm md:max-w-md"
        />

        <div className="max-w-xl text-center md:text-left font font-space-grotesk">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">
            {title}
          </h3>

          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="mb-3 text-gray-600 leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
}
