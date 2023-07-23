import Image from "next/image";
import TechBlock from "@/components/TechBlock";

const technologies = [
  {
    bg: "#fccecd",
    techs: ["AWS", "Google Cloud"],
  },
  {
    bg: "#fcfccd",
    techs: ["Mongo DB", "SQLite", "PostgreSQL"],
  },
  {
    bg: "#3d85c6",
    techs: ["Python", "Flask", "Pandas", "Selenium"],
  },
  {
    bg: "#fffe33",
    techs: ["HTML", "CSS", "Sass", "Bootstrap", "Tailwind"],
  },
  {
    bg: "#b7505b",
    techs: [
      "JavaScript",
      "Node.js",
      "Express",
      "React",
      "Next.js",
      "TypeScript",
    ],
  },
];

export default function Home() {
  return (
    <main className="bg-zinc-900 text-white flex flex-col items-center">
      <a href="">
        {/* <Image
          className="fixed left-[-35px] top-[-40px]"
          src="/jr_logo.png"
          alt=""
          width={250}
          height={250}
        /> */}
      </a>
      <section
        id="presentation"
        className="h-screen flex flex-col justify-center items-center w-[60%]"
      >
        <h1 className="text-8xl mb-5">Jorge Ramos</h1>
        <p className="text-2xl tracking-[10px] mb-16">Full Stack Developer</p>
        <div className="flex flex-col gap-2 mb-16">
          {technologies.map((tech, index) => {
            return <TechBlock key={index} block={tech} />;
          })}
        </div>
        <div className="flex gap-4">
          <a href="" className="border px-10 py-4">
            Contact Me
          </a>
          <a href="" className="px-4 py-4 border">
            Works ↓
          </a>
        </div>
      </section>
      <section className="border-red-500 border-4 h-screen w-[100%]">
        <h1 className="text-[160px] mb-5">My Works</h1>
        shown
      </section>
    </main>
  );
}
