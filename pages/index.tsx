import Image from "next/image";
import TechBlock from "@/components/TechBlock";
import { technologies, works } from "@/public/data";
import WorkCard from "@/components/WorkCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-zinc-900 text-white flex flex-col items-center px-16 gap-40 pb-10">
        <button
          onClick={(e) => {
            window.scrollTo({
              top: document.getElementById("presentation")?.offsetTop,
              behavior: "smooth",
            });
          }}
          className="fixed right-[-35px] top-[-40px]"
        >
          <Image src="/jr_logo.png" alt="" width={200} height={200} />
        </button>
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
            <Link href={"/contact"} className="border px-10 py-4">
              Contact Me
            </Link>
            <button
              className="px-4 py-4 border"
              onClick={(e) => {
                window.scrollTo({
                  top: document.getElementById("MyWorks")?.offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              Works ↓
            </button>
          </div>
        </section>
        <section id="MyWorks" className="w-[100%]">
          <h2 className="text-[160px] mb-5">My Works</h2>
          <p className="text-2xl">Shown #/{works.length}</p>
          <div className="grid grid-cols-[1fr_4fr]">
            <aside className="">
              <h3>Filter</h3>
              <form action="">
                <input type="radio" id="html" value="HTML" />
                <label htmlFor="html">HTML</label>
                <br></br>
                <input type="radio" id="css" value="CSS" />
                <label htmlFor="css">CSS</label>
                <br></br>
                <input type="radio" id="javascript" value="JavaScript" />
                <label htmlFor="javascript">JavaScript</label>
              </form>
            </aside>
            <div className="grid grid-cols-4 gap-5">
              {works.map((work, index) => {
                return <WorkCard key={index} work={work} />;
              })}
            </div>
          </div>
        </section>
        <section id="Closure" className="w-[100%] text-right">
          <h2 className="text-[80px]">Liked</h2>
          <h2 className="text-[80px] mt-[-25px] mb-10">what you just saw?</h2>
          <Link
            href={"/contact"}
            className="border px-10 py-4 inline-block text-[30px]"
          >
            Contact Me
          </Link>
        </section>
        <footer className="text-center">
          <h4>Jorge Ramos</h4>
          <p>Copyright © 2023</p>
        </footer>
      </main>
    </>
  );
}
