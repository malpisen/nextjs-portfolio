import Image from "next/image";
import Socials from "@/components/ui/socials";
import CVButton from "@/components/ui/cv-button";

export default function AboutPage() {
  return (
    <main className="content-grid">
      <section className="full-width relative overflow-hidden py-20">
        <div className="full-width absolute inset-0 rounded-full inset-shadow-[0_0_60px_70px_white] bg-gradient-to-bl from-green-200 via-blue-200 to-violet-300" />
        <div className="relative grid md:grid-cols-2 items-center text-center">
          <div className="space-y-4">
            <h2>Hello World, I'm Malin</h2>
            <Socials />
            <p>
              I'm a fast-learning and driven developer with a broad academic
              background in computer and systems sciences from Stockholm
              University. I'm passionate about programming and have a strong
              analytical mindset that helps me solve problems efficiently. I'm
              responsible, resilient under pressure, and equally comfortable
              working independently or as part of a team - qualities that I
              believe are essential for driving progress in both technology and
              people.
            </p>
          </div>
          <Image
            className="rounded-3xl shadow-lg place-self-center my-4"
            src="/images/malin-rydefalk.jpg"
            width={250}
            height={293}
            alt="Picture of Malin"
          />
        </div>
      </section>
      <section>
        <h2>Technical skills</h2>
        <ul>
          <li>
            Web Development: HTML, CSS, JavaScript (ES6+), TypeScript, React
            (SPA, state management, routing), SASS, Next.js
          </li>
          <li>
            Programming Languages: C#, Python, Java, Swift, JavaScript,
            TypeScript
          </li>
          <li>Databases & Systems: SQL, UML</li>
          <li>
            Tools & Frameworks: Git, GitHub, React.js, Next.js, .NET, Visual
            Studio Code, Eclipse, Xcode, Android Studio, Axure, Microsoft Office
          </li>
        </ul>
      </section>
      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Frontend Developer Program</h3>
            <h4>Lexicon IT Proffs | May 2025 - Nov 2025</h4>
            <p>
              Intensive full-time program (40 hours/week). <br />
              Key topics:
              <br />
              HTML & CSS: Semantic HTML, CSS syntax, Git version control,
              Flexbox & Grid, responsive design
              <br />
              Agile methodologies: GitHub, SCRUM, agile web development
              <br />
              JavaScript: ECMAScript, website publishing, code structure, DOM
              manipulation, external APIs
              <br />
              React: SPA development, SASS, React JS, state management, routing
            </p>
          </li>
          <li>
            <h3>Bachelor's Programme in Computer and Systems Sciences</h3>
            <h4>Stockholm University | 2019 - 2025</h4>
            <p>
              Bachelor of Science, 180 ECTS <br />
              Elective courses in multiple programming languages (C#, Python,
              Java, HTML, CSS, JavaScript), databases (SQL), information
              security, interaction design, business systems, project
              management, and Internet of Things.
            </p>
          </li>
          <li>
            <h3>Natural Science Programme, Animal Science specialization</h3>
            <h4>Spånga Gymnasium | 2009 - 2012</h4>
          </li>
        </ul>
      </section>
      <section>
        <h2>Work Experience</h2>
        <ul>
          <li>
            <h3>Thesis Project & Cybersecurity Consultant</h3>
            <h4>Knowit Cybersecurity & Law | Jan 2022 - Nov 2024</h4>
            <p>
              (on study and parental leave since Nov 2022) <br />
              Wrote my bachelor's thesis on organizational cybersecurity
              awareness with connections to the ISO 27000 series and presented
              the results to both Knowit and external stakeholders. Participated
              in Knowit's trainee program “Cyber Hero Program”, which included
              lectures, studies, and client projects within cybersecurity and
              law. Also completed courses in Identity and Access Management
              (IAM).
            </p>
          </li>
          <li>
            <h3>Real Estate Assistant</h3>
            <h4>Fastighetsbyrån | May 2019 - Nov 2019 </h4>
            <p>
              Worked closely with real estate agents and handled both practical
              and administrative tasks. Maintained frequent contact with clients
              and banks. The role required strong organizational skills,
              attention to detail, responsibility, and the ability to perform
              well under pressure.
            </p>
          </li>
          <li>
            <h3>Warehouse Worker</h3>
            <h4>SMD Logistics | Jan 2017 - May 2019 </h4>
            <p>
              Responsible for packing and logistics operations. The job required
              precision, efficiency, and stress tolerance, as performance-based
              pay (piecework) was used.
            </p>
          </li>
          <li>
            <h3>Warehouse Worker & Customer Service Representative</h3>
            <h4>Svenskt Kosttillskott | Oct 2015 - Dec 2016</h4>
            <p>
              Worked primarily in the warehouse and was awarded “Employee of the
              Month - Most Accurate” several times. Also assisted in customer
              service, which gave me a broad understanding of multiple
              departments and improved inter-departmental collaboration.
            </p>
          </li>
          <li>
            <h3>Au Pair</h3>
            <h4>AuPairCare, USA | Sept 2014 - Sept 2015</h4>
            <p>
              Worked as an au pair in New York and Florida. The role required
              responsibility, problem-solving, independence, and adaptability to
              cultural differences while building trusting relationships with
              families.
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
        <h2>Languages</h2>
        <ul>
          <li>Swedish: Native</li>
          <li>English: Fluent (spoken and written)</li>
          <li>German: Basic knowledge</li>
        </ul>
      </section>
      <section>
        <h2>Other</h2>
        <ul>
          <li>Driver's License (Category B)</li>
          <li>Forklift License (Category A)</li>
        </ul>
      </section>
      <section>
        <h2>References</h2>
        <p>
          Available upon request. <br />
          “Malin is punctual, loyal, quick to learn, and an incredible asset
          with her ability to manage multiple tasks and processes
          simultaneously.”
        </p>
      </section>
      <CVButton />
    </main>
  );
}
