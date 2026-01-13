
import noble from "./assets/n1.JPG";
import mill from "./assets/mill.JPG";
import talhar from "./assets/talhar.JPG";
import alain from "./assets/alain.jpg";

const projects = [
  {
    title: "Noble Driving School ",
    description:
      "Noble Driving School is a full-stack, multi-page web application built to provide a seamless digital experience for driving school operations. The platform enables users to explore various driving courses, view detailed information about services, and conveniently submit online admission applications. ",
      desc2:"Developed with React.js and Tailwind CSS, the frontend delivers a clean, responsive, and user-friendly interface. The backend, powered by PHP and MySQL, ensures secure data processing and efficient form handling. This project highlights strong integration between modern frontend technologies and a reliable backend system to create a dynamic, visually appealing, and fully functional web platform for a professional driving school.",
    image: noble, // place your image in public/images/
    link: "https://nobledrivingschool-git-main-taibullahs-projects.vercel.app?_vercel_share=5EnQkAWK25gTBWeshXXuFu4kcW0x1ghs",
  },
  {
    title: "Al Ain Car Towing _Business Website ",
    description:
      "Designed and developed a professional website for a 24/7 car towing and roadside assistance company. The site clearly presents core services including vehicle towing, emergency roadside support, and recovery solutions, with a strong focus on fast access to contact information and service details.",
      desc2:"Developed with React.js and Tailwind CSS, the frontend delivers a clean, responsive, and user-friendly interface. The backend, powered by PHP and MySQL, ensures secure data processing and efficient form handling. This project highlights strong integration between modern frontend technologies and a reliable backend system to create a dynamic, visually appealing, and fully functional web platform for a professional driving school.",
    image: alain, // place your image in public/images/
    link: "https://alaincartowing.com/",
  },
  {
    title: "Talhar Valley",
    description:
    "Talhar Guest House is a modern, responsive frontend web application designed to showcase a premium guesthouse experience. The website highlights luxury accommodations, room options, and convenient booking features, providing visitors with an elegant and user-friendly interface.",
    desc2:'Built using React.js and Tailwind CSS, the project focuses on clean design, smooth navigation, and a visually appealing layout. It features dedicated pages for Home, Rooms, and Contact, with intuitive calls-to-action like “Book Your Stay” and “View Rooms”. The design emphasizes both comfort and sophistication, offering users a glimpse of the guesthouse’s high-end hospitality and services.',
    image: talhar,
    link: "https://github.com/Taibullah789/talhar-valley",
  },
  {
    title: "FlourMill Pro",
    description:
      "Our Academic FYP FlourMill Pro is a comprehensive enterprise management system developed using the MERN stack to streamline and automate daily operations of flour mills. The platform provides a centralized dashboard for managing key business modules such as User Management, Accounts, Financial Management, Supplier Management, Inventory, Warehouse, Sales & Purchase, and Reports. ",
      desc2:"FlourMill Pro supports role-based access, real-time data visualization, and system configuration tools that allow administrators to control every aspect of the operation from a single interface. This project demonstrates strong full-stack development capabilities, focusing on scalability, usability, and business process automation.",
    image: mill, // place your image in public/images/
    link: "https://github.com/Alibanday/Flour-Mill-Management-System",
  },
];

function Projects() {
  return (
    <div id="projects" className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">My Recent Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-50 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl text-blue-600 font-semibold mb-2">{project.title}</h3>
        
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <p className="text-gray-600 mb-4">{project.desc2}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
