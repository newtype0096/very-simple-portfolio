import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { WorkExperienceProps } from "@/types";

const WorkExperienceItem = ({ 
  name,   
  position, 
  period, 
  markdown, 
  imgSrc,
  team,
  description,
  team_2,
  description_2,
  markdown_2
}: WorkExperienceProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex md:flex-col items-center md:items-start mr-4 gap-6">
        {imgSrc && (
          <Image
            src={imgSrc}
            width="200"
            height="200"
            alt={name}
            className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT border-solid w-24 h-24"
          />
        )}
        <div className="w-48">
          <h3>{name}</h3>
          <div className="flex flex-col">
            <span className="m-0">{position}</span>
            <span>{`${period[0]} - ${period[1]}`}</span>
          </div>
        </div>
      </div>
      <div className="md:border-GRAY_LIGHT md:border-solid md:border-l-[1px] md:pl-4 md:ml-4 markdown w-full">
        <div>
          <h4>{team}</h4>
          <blockquote className="whitespace-pre-wrap">{`${description}`}</blockquote>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown ?? ""}</ReactMarkdown>
        </div>        
        {team_2 && description_2 && (
          <div>
            <h4>{team_2}</h4>
            <blockquote className="whitespace-pre-wrap">{`${description_2}`}</blockquote>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown_2 ?? ""}</ReactMarkdown>
          </div>
        )}        
      </div>
    </div>
  );
};

export default WorkExperienceItem;
