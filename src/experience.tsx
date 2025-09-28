import './experience.css'

function Experience() {
  return (
    <section id="experience" className="py-20 bg-white view" >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My journey in software development, from internships to professional roles
          </p>
        </div>

        <div className="space-y-12">
          {/* Current Role */}
          <div className="relative">
            <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
            <div className="ml-8">
              
                
                
                
              
            </div>
          </div>

          {/* Previous Role */}
          <div className="relative">
            <div className="absolute left-0 top-0 w-4 h-4 bg-gray-400 rounded-full border-4 border-white shadow-lg"></div>
            <div className="ml-8">
              <div className="bg-white p-8 hover:bg-blue-50 rounded-2xl shadow-lg border-l-4 border-gray-400">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Full Stack Developer</h3>
                    <p className="text-blue-600 font-semibold"> Invovision Technologies Ltd.</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-500 text-sm">2025 - Continue</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Developed and maintained multiple client projects using MERN stack. 
                  Collaborated with cross-functional teams to deliver high-quality software solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">React.js</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">REST APIs</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Git</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">SupaBase</span>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Internship */}
          <div className="relative">
            <div className="absolute left-0 top-0 w-4 h-4 bg-gray-400 rounded-full border-4 border-white shadow-lg"></div>
            <div className="ml-8">
              <div className="bg-white p-8 rounded-2xl hover:bg-blue-50 shadow-lg border-l-4 border-gray-400">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Frontend Web Developer  Intern</h3>
                    <p className="text-blue-600 font-semibold">Eziline Software House</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-500 text-sm">2023 - 2024</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Gained hands-on experience in web development while working on real projects. 
                  Learned modern development practices and tools in a fast-paced startup environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Bootstrap</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">jQuery</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 shadow-md overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white text-center group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-4xl mb-4 animate-bounce">⚛️</div>
              <h4 className="text-xl font-bold mb-2 animate-ping">Frontend</h4>
              <p className="text-blue-100">React.js, TypeScript, Tailwind CSS, Redux</p>
            </div>
            <div className=" bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white text-center">
              <div className="text-4xl mb-4 animate-bounce">🟢</div>
              <h4 className="text-xl font-bold mb-2 animate-ping">Backend</h4>
              <p className="text-green-100">Node.js, Express.js, REST APIs, JWT</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-6 rounded-xl text-white text-center">
              <div className="text-4xl mb-4 animate-bounce">🗄️</div>
              <h4 className="text-xl font-bold mb-2 animate-ping">Database</h4>
              <p className="text-yellow-100">MongoDB, Mongoose,supaBase Database Design</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white text-center">
              <div className="text-4xl mb-4 animate-bounce">🛠️</div>
              <h4 className="text-xl font-bold mb-2 animate-ping">Tools</h4>
              <p className="text-purple-100">Git, VS Code, Postman, Docker</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience