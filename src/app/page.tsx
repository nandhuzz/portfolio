
export default function Home() {
  return (
    <Portfolio />
  );
}


function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow bg-white sticky top-0 z-10">
        <h1 className="text-2xl font-bold">Anandu N V</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-white to-gray-100">
        <h2 className="text-4xl font-bold mb-4">Hi, I&apos;m Anandu 👋</h2>
        <p className="max-w-xl text-lg text-gray-600 mb-6">
          Front-End Engineer with 5 years of experience building scalable and responsive web apps.
        </p>
        <button className="rounded-full px-6">View My Work</button>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="text-gray-700 leading-relaxed">
          I specialize in React, TypeScript, and modern UI/UX. Experienced in creating high-performance web
          applications and collaborating in agile teams. Skilled in integrating APIs and optimizing application
          performance.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-16 bg-gray-100">
        <h3 className="text-3xl font-bold mb-8 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="hover:shadow-lg transition">
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Portfolio Website</h4>
              <p className="text-gray-600 mb-4">A personal portfolio built with Next.js and Tailwind CSS.</p>
              <a href="#" className="text-blue-500 underline">View Project</a>
            </div>
          </div>

          <div className="hover:shadow-lg transition">
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">E-commerce UI</h4>
              <p className="text-gray-600 mb-4">Responsive React-based store interface with Stripe integration.</p>
              <a href="#" className="text-blue-500 underline">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">Contact</h3>
        <p className="text-gray-700 mb-6">Interested in working together? Let&apos;s connect.</p>
        <a href="mailto:anandhuviswan72@gmail.com" className="text-blue-500 underline">
          anandhuviswan72@gmail.com
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-white shadow mt-10">
        <p className="text-gray-600">© 2025 Anandu N V</p>
      </footer>
    </div>
  );
}
