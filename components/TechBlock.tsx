interface Props {
  block: {
    bg: string;
    techs: string[];
  };
}

export default function TechBlock(props: Props) {
  return (
    <div className="flex gap-3 justify-center">
      {props.block.techs.map((tech, index) => {
        return (
          <p
            key={index}
            className={`border hover:border-[${props.block.bg}] px-3`}
          >
            {tech}
          </p>
        );
      })}
    </div>
  );
}
