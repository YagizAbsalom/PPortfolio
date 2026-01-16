import { Users } from "lucide-react";
import Slider from "react-slick";

// ========================================
// PORTFOLIO DATA - Customize everything here!
// ========================================
const PORTFOLIO_DATA = {
  // Profile Image
  profileImage: "https://via.placeholder.com/300", // Replace with your actual photo URL

  // Social Media
  discord: {
    username: "@YourDiscordUsername",
    // Discord logo SVG path
    logoPath:
      "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z",
  },
  roblox: {
    username: "@YourRobloxUsername",
    profileLink: "https://www.roblox.com/users/YOUR_USER_ID/profile", // Replace with your Roblox profile link
    // Roblox logo SVG path
    logoPath: "M18.926 23.998L0 18.892 5.075 0 24 5.106z",
  },

  // About Me Section
  aboutMe:
    "I'm a passionate Roblox developer specializing in Lua scripting and game mechanics. With years of experience creating engaging gameplay systems, I bring ideas to life through clean, efficient code. I love solving complex problems and creating smooth, polished experiences for players.",

  // Skills Section
  skills: [
    "Advanced Lua scripting for Roblox",
    "Combat system development",
    "UI/UX design and implementation",
    "Weapon mechanics and balancing",
    "Data management and optimization",
    "Team collaboration and version control",
  ],

  // My Work Section
  work: [
    {
      title: "Combat Systems",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your YouTube video ID
      description:
        "A comprehensive combat system featuring melee weapons, ranged attacks, and special abilities. Includes hit detection, damage calculation, combos, blocking mechanics, and smooth animations. Built with performance optimization in mind to handle multiple players in combat simultaneously.",
    },
    {
      title: "Advanced Inventory System",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your YouTube video ID
      description:
        "A fully functional inventory system with drag-and-drop functionality, item stacking, crafting mechanics, and database integration. Features include item sorting, search functionality, and smooth UI animations for an enhanced user experience.",
    },
    {
      title: "Quest & Achievement System",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your YouTube video ID
      description:
        "A dynamic quest system with objective tracking, reward distribution, and achievement unlocks. Includes a comprehensive UI for quest management, progress tracking, and notifications. Fully customizable through configuration modules.",
    },
  ],

  // Teams/Groups Section
  teams: [
    {
      name: "Team Alpha Studios",
      role: "Lead Scripter",
      description:
        "Developed core gameplay mechanics and combat systems for multiple successful games.",
    },
    {
      name: "Gaming Collective",
      role: "Freelance Developer",
      description:
        "Created custom scripts and systems for various client projects.",
    },
    {
      name: "Indie Dev Group",
      role: "Script Contributor",
      description:
        "Collaborated on open-source projects and community tools.",
    },
  ],
};

// ========================================
// Main Portfolio Component
// ========================================

export default function App() {
  // Slider settings for Work section
  const workSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  // Slider settings for Teams section
  const teamsSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-12">
          <img
            src={PORTFOLIO_DATA.profileImage}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover border-4 border-purple-500 shadow-2xl mb-6"
          />

          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            {/* Discord */}
            <div className="flex flex-col items-center group">
              <div
                className="w-16 h-16 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
                aria-label="Discord"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={PORTFOLIO_DATA.discord.logoPath} />
                </svg>
              </div>
              <div className="mt-2 px-4 py-2 bg-indigo-600 rounded-lg text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {PORTFOLIO_DATA.discord.username}
              </div>
            </div>

            {/* Roblox */}
            <div className="flex flex-col items-center group">
              <a
                href={PORTFOLIO_DATA.roblox.profileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
                aria-label="Roblox"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={PORTFOLIO_DATA.roblox.logoPath} />
                </svg>
              </a>
              <div className="mt-2 px-4 py-2 bg-red-600 rounded-lg text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {PORTFOLIO_DATA.roblox.username}
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <section className="mb-16 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            {PORTFOLIO_DATA.aboutMe}
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-16 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6">
            My Skills
          </h2>
          <ul className="space-y-3">
            {PORTFOLIO_DATA.skills.map((skill, index) => (
              <li
                key={index}
                className="flex items-start text-gray-200 text-lg"
              >
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* My Work Section with Carousel */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            My Work
          </h2>
          <div className="work-slider">
            <Slider {...workSliderSettings}>
              {PORTFOLIO_DATA.work.map((project, index) => (
                <div key={index} className="px-2">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col lg:flex-row gap-6">
                    {/* Video */}
                    <div className="lg:w-1/2">
                      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src={project.videoUrl}
                          title={project.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Teams/Groups Section with Carousel */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            The Groups/Teams I Worked With
          </h2>
          <div className="teams-slider">
            <Slider {...teamsSliderSettings}>
              {PORTFOLIO_DATA.teams.map((team, index) => (
                <div key={index} className="px-3">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                    <div className="flex items-center mb-4">
                      <Users className="w-6 h-6 text-purple-400 mr-3" />
                      <h3 className="text-xl font-bold text-white">
                        {team.name}
                      </h3>
                    </div>
                    <p className="text-purple-300 font-semibold mb-2">
                      {team.role}
                    </p>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {team.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-white/10">
          <p className="text-gray-400 text-sm mb-2">
            © 2024 All rights reserved
          </p>
          <p className="text-gray-500 text-xs">
            Made by Figma{" "}
          </p>
        </footer>
      </div>

      <style>{`
        .work-slider .slick-slide > div {
          padding: 0 4px;
        }

        .teams-slider .slick-slide > div {
          padding: 0;
        }

        .slick-prev,
        .slick-next {
          z-index: 1;
        }

        .slick-prev {
          left: -30px;
        }

        .slick-next {
          right: -30px;
        }

        .slick-prev:before,
        .slick-next:before {
          font-size: 30px;
          color: #a855f7;
        }

        .slick-dots li button:before {
          color: #a855f7;
        }

        .slick-dots li.slick-active button:before {
          color: #9333ea;
        }
      `}</style>
    </div>
  );
}
