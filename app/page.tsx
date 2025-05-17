import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideGithub, LucideLinkedin, LucideMail } from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-800 dark:text-gray-200">
      {/* Hero/Header Section */}
      <header className="container max-w-6xl mx-auto pt-16 pb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          <span className="text-[#009688]">Charles Crowley</span> — AI Developer & ESL Specialist
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl">
          I build AI tools for ESL teachers and students. 
        </p>
        <div className="h-1 w-24 bg-[#009688] mt-6"></div>
      </header>

      {/* About Me Section */}
      <section className="container max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-[#009688]">About Me</h2>
        <p className="text-lg max-w-3xl">
          Independent junior full-stack developer with a passion for building AI tools for English learners. Certified
          ESL educator with +10 experience and a passion for creating engaging learning experiences. Combining technical
          expertise with language instruction to develop innovative educational tools. [en,es,cat]
        </p>
      </section>

      {/* Skills Section */}
      <section className="container max-w-6xl mx-auto py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-8 text-[#009688]">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Development</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-[#009688] mr-2"></span>
                <span>JavaScript, TypeScript</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-[#009688] mr-2"></span>
                <span>PostgreSQL</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-[#009688] mr-2"></span>
                <span>HTML5, CSS3, Tailwind CSS</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-[#009688] mr-2"></span>
                <span>Git, Docker</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-[#009688] mr-2"></span>
                <span>RESTful APIs</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">ESL</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-[#009688] mr-2"></span>
                <span>TEFL/TESOL Certified</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-[#009688] mr-2"></span>
                <span>10+ years teaching experience</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-[#009688] mr-2"></span>
                <span>Cambridge exam preparation experience</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-[#009688] mr-2"></span>
                <span>Online and in-person instruction</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-[#009688] mr-2"></span>
                <span>Student assessment and progress tracking</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#009688]">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-full bg-[#00968822] text-[#009688] dark:bg-[#00968844]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="text-[#009688] border-[#009688] hover:bg-[#00968822]">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="container max-w-6xl mx-auto py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-6 text-[#009688]">Chat With My AI assistant</h2>
        <p className="mb-8">Ask me anything about my work or experience.</p>

        {/* Chatbot container - This is where you'll inject your chatbot script */}
        <div
          id="assistant-container"
          className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-96 bg-white dark:bg-gray-800"
        >
          {/* Your chatbot will be injected here */}
          <div className="flex items-center justify-center h-full text-gray-400">
            <p>Chatbot coming soon</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {/* Add a comment in the HTML for the script injection */}
          {/* <!-- Add your chatbot script here: <script src="my-bot.js"></script> --> */}
        </p>
      </section>

      {/* Footer */}
      <footer className="container max-w-6xl mx-auto py-8 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Charles Crowley. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="mailto:charlescrowleydev@gmail.com"
              className="text-gray-600 hover:text-[#009688] dark:text-gray-400 dark:hover:text-[#009688]"
              aria-label="Email"
            >
              <LucideMail size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/charles-crowley-4bb88b231/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#009688] dark:text-gray-400 dark:hover:text-[#009688]"
              aria-label="LinkedIn"
            >
              <LucideLinkedin size={20} />
            </Link>
            <Link
              href="https://github.com/CharlesCrowley"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#009688] dark:text-gray-400 dark:hover:text-[#009688]"
              aria-label="GitHub"
            >
              <LucideGithub size={20} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample project data - replace with your actual projects
const projects = [
  {
    title: "ESL Tutor",
    description: "A low-latency voice chat AI with memory of my student's last lesson.",
    technologies: ["Azure TTS", "Groq", "Deepgram", "Python", "Javascript"],
    link: "#project-1",
  },
  {
    title: "Teacher's Scribe",
    description: "A tool for teachers which transcribes lessons, categorises vocabulary, grammar and difficulty areas for each student, and makes email summaries.",
    technologies: ["Javascript", "Python", "Deepseek"],
    link: "#project-2",
  },
  {
    title: "FCE Speaking Part 2 Examiner",
    description: "A tool for students which allows them to record 1 minute of speech, get feedback, tips, error correction",
    technologies: ["JavaScript", "Express", "PostgreSQL"],
    link: "#project-3",
  },
  {
    title: "FCE Use of English part 4",
    description: "Concept: Imagine if you could to a difficult exercise directly. If you don't know the answer you can chat with an AI which can explain it to you",
    technologies: ["Javascript", "Python", "Deepseek"],
    link: "#project-4",
  },
  {
    title: "5-Word Speaking Challenge",
    description: "Speak for one minute using the five words given. The words can be chosen.",
    technologies: ["OpenAI", "Javascript", "Deepseek"],
    link: "#project-5",
  },
  {
    title: "A2 short story generator for Youtube",
    description: "A bot that creates short videos with a comic book style image using the most common words in English",
    technologies: ["Python", "OpenAI"],
    link: "#project-6",
  },
]
