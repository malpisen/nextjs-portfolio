export default function Home() {
  return (
    <main className="content-grid gap-4">
      <section >
        <p>
          I'm a fast-learning and driven developer with a broad academic
          background in computer and systems sciences from Stockholm University.
          I'm passionate about programming and have a strong analytical mindset
          that helps me solve problems efficiently. I'm responsible, resilient
          under pressure, and equally comfortable working independently or as
          part of a team — qualities that I believe are essential for driving
          progress in both technology and people.
        </p>
      </section>
      <section >
        <h3>Technical skills</h3>
        <p>
          Web Development: HTML, CSS, JavaScript (ES6+), TypeScript, React (SPA,
          state management, routing), SASS, Next.js Programming Languages: C#,
          Python, Java, Swift, JavaScript, TypeScript Databases & Systems: SQL,
          UML Tools & Frameworks: Git, GitHub, React.js, Next.js, .NET, Visual
          Studio Code, Eclipse, Xcode, Android Studio, Axure, Microsoft Office
        </p>
      </section>
      <section >
        <h3>Education</h3>
        <p>
          Frontend Developer Program, Lexicon IT Proffs | May 2025 - Nov 2025
          Intensive full-time program (40 hours/week). Key topics: HTML & CSS:
          Semantic HTML, CSS syntax, Git version control, Flexbox & Grid,
          responsive design Agile methodologies: GitHub, SCRUM, agile web
          development JavaScript: ECMAScript, website publishing, code
          structure, DOM manipulation, external APIs React: SPA development,
          SASS, React JS, state management, routing
        </p>
        <p>
          Bachelor's Programme in Computer and Systems Sciences, Stockholm
          University | 2019 - 2025 Bachelor of Science, 180 ECTS Elective
          courses in multiple programming languages (C#, Python, Java, HTML,
          CSS, JavaScript), databases (SQL), information security, interaction
          design, business systems, project management, and Internet of Things.
        </p>
        <p>
          Natural Science Programme, Animal Science specialization, Spånga
          Gymnasium | 2009 - 2012
        </p>
      </section>
      <section >
        <h3>Work Experience</h3>
        <p>
          Thesis Project & Cybersecurity Consultant, Knowit Cybersecurity & Law
          | Jan 2022 - Nov 2024 (on study and parental leave since Nov 2022)
          Wrote my bachelor's thesis on organizational cybersecurity awareness
          with connections to the ISO 27000 series and presented the results to
          both Knowit and external stakeholders. Participated in Knowit's
          trainee program “Cyber Hero Program”, which included lectures,
          studies, and client projects within cybersecurity and law. Also
          completed courses in Identity and Access Management (IAM).
        </p>
        <p>
          Real Estate Assistant, Fastighetsbyrån | May 2019 - Nov 2019 Worked
          closely with real estate agents and handled both practical and
          administrative tasks. Maintained frequent contact with clients and
          banks. The role required strong organizational skills, attention to
          detail, responsibility, and the ability to perform well under
          pressure.
        </p>
        <p>
          Warehouse Worker, SMD Logistics | Jan 2017 - May 2019 Responsible for
          packing and logistics operations. The job required precision,
          efficiency, and stress tolerance, as performance-based pay (piecework)
          was used.
        </p>
        <p>
          Warehouse Worker & Customer Service Representative, Svenskt
          Kosttillskott | Oct 2015 - Dec 2016 Worked primarily in the warehouse
          and was awarded “Employee of the Month - Most Accurate” several times.
          Also assisted in customer service, which gave me a broad understanding
          of multiple departments and improved inter-departmental collaboration.
        </p>
        <p>
          Au Pair, AuPairCare, USA | Sept 2014 - Sept 2015 Worked as an au pair
          in New York and Florida. The role required responsibility,
          problem-solving, independence, and adaptability to cultural
          differences while building trusting relationships with families.
        </p>
        <p>
          Customer Service Representative, Svenskt Kosttillskott | Dec 2012 -
          July 2014 Started as a customer service representative and
          receptionist. After only six months, I became the Head of Customer
          Service, responsible for operations, development, customer
          satisfaction, and training of new staff.
        </p>
      </section>
      <section>
        <h3>Languages</h3>
        <p>Swedish: Native</p>
        <p>English: Fluent (spoken and written)</p>
        <p>German: Basic knowledge</p>
      </section>
      <section>
        <h3>Other</h3>
        <p>Driver's License (Category B) </p>
        <p>Forklift License (Category A)</p>
      </section>
      <section>
        <h3>References</h3>
        <p> Available upon request. </p>
        <p>
          “Malin is punctual, loyal, quick to learn, and an incredible asset
          with her ability to manage multiple tasks and processes
          simultaneously.”
        </p>
      </section>
      {/* If this changes to Link - prefetch={false} */}
      <button className="px-4 py-2 text-black bg-pink-200 rounded-lg hover:bg-pink-300 cursor-pointer">
        Download CV
      </button>
    </main>
  );
}
