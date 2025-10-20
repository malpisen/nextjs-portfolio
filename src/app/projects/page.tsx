export default function ProjectsPage() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 rounded-4xl inset-shadow-[0_0_60px_70px_white] bg-gradient-to-bl from-yellow-200 from-30% to-green-200" />
      <div className="relative my-10 mx-30 items-center">
        <h2 className="text-center">Projects</h2>

        <ul>
          <li>
            <strong>Project A:</strong> A web application for managing tasks
            efficiently.
          </li>
          <li>
            <strong>Project B:</strong> An e-commerce platform with a
            user-friendly interface.
          </li>
          <li>
            <strong>Project C:</strong> A mobile app for tracking fitness goals.
          </li>
        </ul>
      </div>
    </section>
  );
}
