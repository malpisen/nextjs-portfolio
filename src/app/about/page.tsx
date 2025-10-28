import Image from "next/image";
import Socials from "@/components/ui/socials";
import CVButton from "@/components/ui/cv-button";

export default function AboutPage() {
  return (
    <>
      <section className="full-width relative overflow-hidden py-20">
        <div
          className="full-width absolute inset-0 rounded-xl lg:rounded-full inset-shadow-[0_0_60px_70px_white] 
        bg-gradient-to-bl from-green-200/70 from-20% via-blue-200/70 to-violet-300/70"
        />
        <div className="relative grid md:grid-cols-2 gap-4 px-20 py-5 xl:px-0 items-center text-center">
          <div className="space-y-4">
            <h2 className="mb-0">Hello World, I&apos;m Malin</h2>
            <Socials />
            <p>
              I&apos;m a fast-learning and driven developer with a broad
              academic background in computer and systems sciences from
              Stockholm University. I&apos;m passionate about programming and
              have a strong analytical mindset that helps me solve problems
              efficiently. I&apos;m responsible, resilient under pressure, and
              equally comfortable working independently or as part of a team -
              qualities that I believe are essential for driving progress in
              both technology and people.
            </p>
          </div>
          <Image
            className="rounded-3xl shadow-lg place-self-center my-4 transition-all duration-300 hover:scale-105"
            src="/images/malin-rydefalk.jpg"
            width={250}
            height={293}
            alt="Picture of Malin"
          />
        </div>
      </section>
      <div className="space-y-10">
        <section>
          <h2 className="text-start pb-1">Technical skills</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Web Development: </span>HTML, CSS,
              JavaScript (ES6+), TypeScript, React (SPA, state management,
              routing), SASS, Next.js
            </li>
            <li>
              <span className="font-semibold">Programming Languages: </span>C#,
              Python, Java, Swift, JavaScript, TypeScript
            </li>
            <li>
              <span className="font-semibold">Databases & Systems: </span>SQL,
              UML
            </li>
            <li>
              <span className="font-semibold">Tools & Frameworks: </span>Git,
              GitHub, React.js, Next.js, .NET, Visual Studio Code, Eclipse,
              Xcode, Android Studio, Axure, Microsoft Office
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-start pb-1">Education</h2>
          <ul className="space-y-5">
            <li>
              <h3>Frontend Developer Program</h3>
              <h4>Lexicon IT Proffs | May 2025 - Nov 2025</h4>
              Intensive full-time program (40 hours/week). Key topics:
              <ul>
                <li>
                  <span className="font-semibold">HTML & CSS: </span>Semantic
                  HTML, CSS syntax, Git version control, Flexbox & Grid,
                  responsive design
                </li>
                <li>
                  <span className="font-semibold">Agile methodologies: </span>
                  GitHub, SCRUM, agile web development
                </li>
                <li>
                  <span className="font-semibold">JavaScript: </span>ECMAScript,
                  website publishing, code structure, DOM manipulation, external
                  APIs
                </li>
                <li>
                  <span className="font-semibold">React: </span>SPA development,
                  SASS, React JS, state management, routing
                </li>
              </ul>
            </li>
            <li>
              <h3>
                Bachelor&apos;s Programme in Computer and Systems Sciences
              </h3>
              <h4>Stockholm University | 2019 - 2025</h4>
              <p>
                Bachelor of Science, 180 ECTS <br />
                Elective courses in multiple programming languages (
                <span className="font-semibold">
                  C#, Python, Java, HTML, CSS, JavaScript
                </span>
                ), databases (<span className="font-semibold">SQL</span>),
                information security, interaction design, business systems,
                project management, and Internet of Things.
              </p>
            </li>
            <li>
              <h3>Natural Science Programme, Animal Science specialization</h3>
              <h4>Spånga Gymnasium | 2009 - 2012</h4>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-start pb-1">Work Experience</h2>
          <ul className="space-y-5">
            <li>
              <h3>Thesis Project & Cybersecurity Consultant</h3>
              <h4>Knowit Cybersecurity & Law | Jan 2022 - Nov 2024</h4>
              <p>
                <span className="text-sm">
                  (on study and parental leave since Nov 2022)
                </span>
                <br />
                Wrote my bachelor&apos;s thesis on organizational cybersecurity
                awareness with connections to the ISO 27000 series and presented
                the results to both Knowit and external stakeholders.
                Participated in Knowit&apos;s trainee program “Cyber Hero
                Program”, which included lectures, studies, and client projects
                within cybersecurity and law. Also completed courses in Identity
                and Access Management (IAM).
              </p>
            </li>
            <li>
              <h3>Real Estate Assistant</h3>
              <h4>Fastighetsbyrån | May 2019 - Nov 2019 </h4>
              <p>
                Worked closely with real estate agents and handled both
                practical and administrative tasks. Maintained frequent contact
                with clients and banks. The role required strong organizational
                skills, attention to detail, responsibility, and the ability to
                perform well under pressure.
              </p>
            </li>
            <li>
              <h3>Warehouse Worker</h3>
              <h4>SMD Logistics | Jan 2017 - May 2019 </h4>
              <p>
                Responsible for packing and logistics operations. The job
                required precision, efficiency, and stress tolerance, as
                performance-based pay (piecework) was used.
              </p>
            </li>
            <li>
              <h3>Warehouse Worker & Customer Service Representative</h3>
              <h4>Svenskt Kosttillskott | Oct 2015 - Dec 2016</h4>
              <p>
                Worked primarily in the warehouse and was awarded “Employee of
                the Month - Most Accurate” several times. Also assisted in
                customer service, which gave me a broad understanding of
                multiple departments and improved inter-departmental
                collaboration.
              </p>
            </li>
            <li>
              <h3>Au Pair</h3>
              <h4>AuPairCare, USA | Sept 2014 - Sept 2015</h4>
              <p>
                Worked as an au pair in New York and Florida. The role required
                responsibility, problem-solving, independence, and adaptability
                to cultural differences while building trusting relationships
                with families.
              </p>
            </li>
            <li>
              <h3>Head of Customer Service</h3>
              <h4>Svenskt Kosttillskott | Dec 2012 - July 2014</h4>
              <p>
                Started as a customer service representative and receptionist.
                After only six months, I became the Head of Customer Service,
                responsible for operations, development, customer satisfaction,
                and training of new staff.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-start pb-1 ">Languages</h2>
          <ul className="space-y-2">
            <li>Swedish: Native</li>
            <li>English: Fluent (spoken and written)</li>
            <li>German: Basic knowledge</li>
          </ul>
        </section>
        <section>
          <h2 className="text-start pb-1">Other</h2>
          <ul className="space-y-2">
            <li>Driver&apos;s License (Category B)</li>
            <li>Forklift License (Category A)</li>
          </ul>
        </section>
        <section>
          <h2 className="text-start pb-1">References</h2>
          <p>
            Available upon request. <br />
          </p>
          <blockquote className="italic p-4">
            “Malin is punctual, loyal, quick to learn, and an incredible asset
            with her ability to manage multiple tasks and processes
            simultaneously.”
          </blockquote>
        </section>
        <div className="flex justify-center">
          <CVButton />
        </div>
      </div>
    </>
  );
}
