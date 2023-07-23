import { technologies } from "@/public/data";
import Image from "next/image";

interface Props {
  work: {
    title: string;
    creationDate: string;
    url: string;
    technologies: string[];
    description: string;
  };
}

export default function WorkCard(props: Props) {
  return (
    <a
      href={`/work/${props.work.title}`}
      className="border-white border-2 py-2 px-4 flex flex-col gap-3"
    >
      <h4>{props.work.title}</h4>
      <Image
        className=""
        src="/daftpunk.jpg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <p>&#x1F5D3; {`${props.work.creationDate}`}</p>
      <div className="flex gap-3">
        {props.work.technologies.map((technologie, index) => {
          return <span key={index}>{`#${technologie}`}</span>;
        })}
      </div>
    </a>
  );
}
