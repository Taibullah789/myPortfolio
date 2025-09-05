import React from 'react'

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl animate-pulse font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Basic Info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-to-br hover:animate-bounce  from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <span className="text-8xl font-bold text-gray-800">T</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Open to work
              </div>
            </div>

            <div className="text-center lg:text-left text-red-700 ">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Taib</h3>
              <p className="text-blue-600 font-semibold mb-2">MERN Stack Developer</p>
              <p className="text-gray-600">Software Engineer from Riphah International University, Islamabad</p>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Who I Am</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a passionate MERN Stack Developer with a strong foundation in modern web development. 
                Graduated from Riphah International University, Islamabad, I specialize in creating 
                scalable, efficient, and user-friendly web applications using MongoDB, Express.js, 
                React.js, and Node.js.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a keen eye for detail and a commitment to writing clean, maintainable code, 
                I enjoy turning complex problems into simple, beautiful solutions. I'm always 
                eager to learn new technologies and stay updated with the latest industry trends.
              </p>
            </div>

            {/* Skills */}
            <div className="animate-pulse">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 ">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1 ">
                      <span className="text-sm font-medium text-gray-700">React.js</span>
                      <span className="text-sm text-gray-500">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Node.js</span>
                      <span className="text-sm text-gray-500">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">MongoDB</span>
                      <span className="text-sm text-gray-500">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Express.js</span>
                      <span className="text-sm text-gray-500">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">TypeScript</span>
                      <span className="text-sm text-gray-500">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Tailwind CSS</span>
                      <span className="text-sm text-gray-500">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Education</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">R</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Riphah International University</h4>
                    <p className="text-gray-600">Software Engineering</p>
                    <p className="text-sm text-gray-500">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About