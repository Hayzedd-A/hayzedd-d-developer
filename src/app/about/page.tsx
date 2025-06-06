"use client";

import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Github,
  Linkedin,
  Download,
  Calendar,
  Briefcase,
  CheckCircle,
  CodeSquareIcon,
  CaptionsIcon,
  HeartIcon,
  MapPinIcon,
  CalendarIcon,
  BriefcaseIcon,
  Icon,
  PiIcon,
} from "lucide-react";

import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import { themes } from "@/app/context/ThemeContext";
// import {
//   CodeBracketIcon,
//   AcademicCapIcon,
//   BriefcaseIcon,
//   HeartIcon,
//   MapPinIcon,
//   CalendarIcon
// } from "@heroicons/react/24/outline";
// import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
// import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";
import Image from "next/image";
import GitHubStats from "@/app/components/GithubStat";

const About = () => {
  const { theme } = useTheme();

  const skills = [
    { name: "React", icon: PiIcon, level: 90, color: "#61DAFB" },
    { name: "TypeScript", icon: PiIcon, level: 85, color: "#3178C6" },
    { name: "Next.js", icon: PiIcon, level: 88, color: "#000000" },
    { name: "Node.js", icon: PiIcon, level: 82, color: "#339933" },
    { name: "Python", icon: PiIcon, level: 75, color: "#3776AB" },
    { name: "Tailwind CSS", icon: PiIcon, level: 92, color: "#06B6D4" },
    { name: "MongoDB", icon: PiIcon, level: 78, color: "#47A248" },
    { name: "Git", icon: PiIcon, level: 85, color: "#F05032" },
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting system solutions.",
      technologies: ["React", "TypeScript", "AWS", "Node.js", "PostgreSQL"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects, focusing on responsive design and performance optimization. Collaborated with design teams to implement pixel-perfect UIs.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
    },
    {
      title: "Frontend Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description:
        "Built interactive user interfaces and implemented modern frontend architectures. Worked closely with UX designers to create engaging user experiences.",
      technologies: ["React", "JavaScript", "SCSS", "Webpack"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Federal University of Agriculture, Abeokuta",
      period: "2018 - 2023",
      description:
        "Focused on software engineering, algorithms, and data structures. Graduated with honors.",
    },
    {
      degree: "Backend Web Development Bootcamp",
      school: "Zulfah Academy",
      period: "2024",
      description:
        "Intensive 9 months program covering modern web development technologies and best practices.",
      stack: ["MySql", "Github", "Express.js", "MongoDB", "JavaScript", "Algorithm"]
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Tobex Academy",
      period: "2020",
      description:
        "Intensive program covering modern web development technologies and best practices.",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Tobex Academy",
      period: "2020",
      description:
        "Intensive program covering modern web development technologies and best practices.",
    },
  ];

  const interests = [
    {
      name: "Open Source",
      icon: CodeSquareIcon,
      description: "Contributing to open source projects",
    },
    {
      name: "Learning",
      icon: CaptionsIcon,
      description: "Exploring new technologies and frameworks",
    },
    {
      name: "Mentoring",
      icon: HeartIcon,
      description: "Helping other developers grow",
    },
    {
      name: "Travel",
      icon: MapPinIcon,
      description: "Exploring different cultures and places",
    },
  ];

  return (
    <div
      className={`min-h-screen ${themes[theme].background} transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/profile.png" // Add your profile photo
              alt="Adebayo Azeez"
              fill
              className="rounded-full object-cover border-4 border-white shadow-lg"
              onError={(e) => {
                // Fallback to a placeholder if image doesn't exist
                e.currentTarget.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E";
              }}
            />
          </div>
          <h1
            className={`text-4xl md:text-5xl font-bold ${themes[theme].text} mb-4`}
          >
            About Me
          </h1>
          <p
            className={`text-lg ${themes[theme].textSecondary} max-w-3xl mx-auto leading-relaxed`}
          >
            I'm a passionate full-stack developer with over 5 years of
            experience creating digital solutions that make a difference. I love
            turning complex problems into simple, beautiful, and intuitive
            designs. When I'm not coding, you'll find me exploring new
            technologies, contributing to open source, or sharing knowledge with
            the developer community.
          </p>
        </motion.div>

        {/* Personal Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div
            className={`${themes[theme].background} border ${themes[theme].border} rounded-xl p-6 text-center shadow-lg`}
          >
            <MapPinIcon
              className={`w-8 h-8 ${themes[theme].accent} mx-auto mb-3`}
            />
            <h3 className={`font-semibold ${themes[theme].text} mb-1`}>
              Location
            </h3>
            <p className={`${themes[theme].textSecondary}`}>Ikotun, Lagos, Nigeria</p>
          </div>
          <div
            className={`${themes[theme].background} border ${themes[theme].border} rounded-xl p-6 text-center shadow-lg`}
          >
            <CalendarIcon
              className={`w-8 h-8 ${themes[theme].accent} mx-auto mb-3`}
            />
            <h3 className={`font-semibold ${themes[theme].text} mb-1`}>
              Experience
            </h3>
            <p className={`${themes[theme].textSecondary}`}>5+ Years</p>
          </div>
          <div
            className={`${themes[theme].background} border ${themes[theme].border} rounded-xl p-6 text-center shadow-lg`}
          >
            <BriefcaseIcon
              className={`w-8 h-8 ${themes[theme].accent} mx-auto mb-3`}
            />
            <h3 className={`font-semibold ${themes[theme].text} mb-1`}>
              Status
            </h3>
            <p className={`${themes[theme].textSecondary}`}>
              Available for Work
            </p>
          </div>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2
            className={`text-3xl font-bold ${themes[theme].text} mb-8 text-center`}
          >
            GitHub Statistics
          </h2>
          <GitHubStats />
        </motion.div>

        {/* Skills Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2
            className={`text-3xl font-bold ${themes[theme].text} mb-8 text-center`}
          >
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`${themes[theme].background} border ${themes[theme].border} rounded-xl p-6 shadow-lg`}
                >
                  <div className="flex items-center mb-4">
                    <Icon
                      className="w-8 h-8 mr-3"
                      style={{ color: skill.color }}
                    />
                    <div className="flex-1">
                      <h3 className={`font-semibold ${themes[theme].text}`}>
                        {skill.name}
                      </h3>
                      <p className={`text-sm ${themes[theme].textSecondary}`}>
                        {skill.level}% Proficiency
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div> */}

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h2
            className={`text-3xl font-bold ${themes[theme].text} mb-8 text-center`}
          >
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`${themes[theme].background} border ${themes[theme].border} rounded-xl p-6 shadow-lg`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3
                      className={`text-xl font-semibold ${themes[theme].text}`}
                    >
                      {exp.title}
                    </h3>
                    <p className={`${themes[theme].accent} font-medium`}>
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className={`${themes[theme].textSecondary} text-sm mt-1 md:mt-0`}
                  >
                    {exp.period}
                  </span>
                </div>
                <p className={`${themes[theme].textSecondary} mb-4`}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full ${themes[theme].primary} text-white`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2
            className={`text-3xl font-bold ${themes[theme].text} mb-8 text-center`}
          >
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`${themes[theme].background} border ${themes[theme].border} rounded-xl p-6 shadow-lg`}
              >
                <div className="flex items-start mb-4">
                  <CaptionsIcon
                    className={`w-8 h-8 ${themes[theme].accent} mr-3 mt-1`}
                  />
                  <div className="flex-1">
                    <h3 className={`font-semibold ${themes[theme].text} mb-1`}>
                      {edu.degree}
                    </h3>
                    <p className={`${themes[theme].accent} text-sm mb-1`}>
                      {edu.school}
                    </p>
                    <p
                      className={`${themes[theme].textSecondary} text-xs mb-3`}
                    >
                      {edu.period}
                    </p>
                  </div>
                </div>
                <p className={`${themes[theme].textSecondary} text-sm`}>
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-12"
        >
          <h2
            className={`text-3xl font-bold ${themes[theme].text} mb-8 text-center`}
          >
            Interests & Hobbies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`${themes[theme].background} border ${themes[theme].border} rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <Icon
                    className={`w-12 h-12 ${themes[theme].accent} mx-auto mb-4`}
                  />
                  <h3 className={`font-semibold ${themes[theme].text} mb-2`}>
                    {interest.name}
                  </h3>
                  <p className={`${themes[theme].textSecondary} text-sm`}>
                    {interest.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`${themes[theme].background} border ${themes[theme].border} rounded-2xl p-8 text-center shadow-lg`}
        >
          <h2 className={`text-2xl font-bold ${themes[theme].text} mb-4`}>
            Let's Work Together
          </h2>
          <p
            className={`${themes[theme].textSecondary} mb-6 max-w-2xl mx-auto`}
          >
            I'm always interested in new opportunities and exciting projects.
            Whether you have a project in mind or just want to chat about
            technology, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${themes[theme].primary} ${themes[theme].primaryHover} text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl`}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`border-2 ${themes[theme].border} ${themes[theme].text} px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:${themes[theme].hover}`}
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
