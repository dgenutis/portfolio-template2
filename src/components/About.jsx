/**
 * @copyright 2024 Dainius Genutis
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: "Project done",
    number: 10,
  },
  {
    label: "Years of experience",
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welkome! I&apos;m Dainius Genutis a junior Javascript fullstack web
            developer. I have accumulated 18 years of experience working in a
            casino, from a croupier to a shift manager position. Six months ago,
            after our branch in Klaipėda closed, I decided to try something that
            had interested me for a long time – programming. After successfully
            completing the Vilnius Coding School JavaScript - Web Full-Stack
            course, I realized that I would like to develop my career as a
            junior programmer. Therefore, I am currently open to new career
            opportunities in the programming field.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7"
          >
            {aboutItems.map(({label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semiboldbold md:text-4xl">{number}</span>
                  <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))
            }

            <img
            src="/1.jpg"
            alt="logo"
            width={30}
            height={30}
            className="ml-auto md:w-[40px] md:h-[40]"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
