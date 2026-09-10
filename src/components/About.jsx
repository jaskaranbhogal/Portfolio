function About() {
    return (
      <section id="about" className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
  
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
            About Me
          </p>
  
          <div className="grid gap-12 md:grid-cols-2">
  
            {/* Left Side */}
            <div>
              <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                Building software,
                <br />
                solving real problems.
              </h2>
            </div>
  
            {/* Right Side */}
            <div className="space-y-6 text-lg leading-8 text-gray-400">
  
              <p>
                I'm a Computer Science student at Farmingdale State College
                and an aspiring software engineer with a strong interest in
                building practical and user-focused applications.
              </p>
  
              <p>
                My experience ranges from developing web applications and
                working with APIs and databases to leading engineering teams.
                I've worked as a Software Engineering and Project Management
                intern and previously served as a Lead Software Engineer for a
                robotics team, where I worked with both software and hardware.
              </p>
  
              <p>
                I enjoy taking ideas and turning them into working products.
                Whether I'm building with React and JavaScript, working with
                backend services like Supabase and Firebase, or programming in
                Java, Python, and C++, I'm always looking for new challenges
                and opportunities to grow as an engineer.
              </p>
  
            </div>
  
          </div>
        </div>
      </section>
    )
  }
  
  export default About