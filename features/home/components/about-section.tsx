import Image from "next/image"
import { personalInfo } from "@/constants/personal-info"
import { education } from "@/constants/education"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a fullstack developer with a passion for creating elegant, efficient, and user-friendly web
              applications. With expertise in both frontend and backend technologies, I bring a holistic approach to
              software development.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/kuet.jpg"
            width={400}
            height={400}
            alt="About Shihab"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-muted-foreground">{personalInfo.longBio}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="space-y-2 mb-4">
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
