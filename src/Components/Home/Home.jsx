import React from "react";

const Home = () => {
  return (
    <div>
      <figure className="diff aspect-16/9" tabIndex={0}>
        <div className="diff-item-1" role="img" tabIndex={0}>
          <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
            Aaaa
          </div>
        </div>
        <div className="diff-item-2" role="img">
          <div className="bg-base-200 grid place-content-center text-9xl font-black">
            Aaaa
          </div>
        </div>
        <div className="diff-resizer"></div>
      </figure>
      <div className="hero bg-base-200 min-h-screen mb-10">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
            BMW is a German luxury car manufacturer founded in 1916. Known for blending performance, innovation, and style, BMW produces high-quality vehicles ranging from sporty sedans to powerful SUVs and futuristic electric cars. The brand is famous for its driving pleasure, engineering excellence, and iconic design worldwide.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">1975</time>
            <div className="text-lg font-black">BMW 3 Series (E21) </div>
            The BMW 3 Series debuted in 1975 with the E21 generation, setting a
            new standard for compact executive cars. Known for its sporty
            driving dynamics and sleek design, the 3 Series quickly became a
            favorite among enthusiasts and professionals alike. Over the years,
            it has evolved into one of BMW’s best-selling and most iconic
            models, blending luxury, performance, and everyday practicality.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">1975</time>
            <div className="text-lg font-black">BMW 3 Series (E21) </div>
            The BMW 3 Series debuted in 1975 with the E21 generation, setting a
            new standard for compact executive cars. Known for its sporty
            driving dynamics and sleek design, the 3 Series quickly became a
            favorite among enthusiasts and professionals alike. Over the years,
            it has evolved into one of BMW’s best-selling and most iconic
            models, blending luxury, performance, and everyday practicality.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">1977</time>
            <div className="text-lg font-black">BMW 7 Series (E23)</div>
            BMW launched the 7 Series in 1977 as their flagship luxury sedan.
            The E23 generation introduced groundbreaking technologies such as an
            onboard computer and service interval indicators. Designed for those
            who desired top-tier luxury, advanced features, and a powerful yet
            smooth ride, the 7 Series represented BMW’s dedication to innovation
            and excellence in executive transportation.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">1999</time>
            <div className="text-lg font-black"> BMW X5 (E53)</div>
            In 1999, BMW entered the SUV market with the X5, branding it as a
            "Sports Activity Vehicle." The E53 X5 combined the handling
            characteristics of a sedan with the versatility of an SUV,
            revolutionizing the luxury SUV category. Its success opened the door
            for BMW to create a whole line of "X" models, blending sporty
            performance with rugged utility.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2014</time>
            <div className="text-lg font-black">BMW i8</div>
            The BMW i8 was launched in 2014 as part of BMW’s visionary "i"
            sub-brand focusing on electric and hybrid vehicles. With its
            futuristic design, gullwing doors, and plug-in hybrid powertrain,
            the i8 offered a glimpse into the future of sustainable sports cars.
            It was praised for combining environmental responsibility with true
            BMW driving pleasure, marking a bold step into the world of
            eco-friendly performance vehicles.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Home;
