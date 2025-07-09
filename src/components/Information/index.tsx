import ContactItem from "../ContactItem";
import Introduce from "./Introduce";

import { DataProps } from "@/types";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 md:gap-12">
        <img
          src="/images/profile.jpg"
          alt="프로필 사진"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto sm:mx-0"
        />
        <div className="flex flex-col gap-2 flex-1">
          <h2 className="leading-[1.15]">
            {/* 포지션에 맞게 문구를 수정해주세요. 혹은, 본인이 원하는 대로 문구를 바꿔주세요. */}
            <br />
            안녕하세요,
            <br /> 응용소프트웨어 개발자{" "}
            <span className="text-PRIMARY font-semibold">{information.name}</span>
            입니다.
          </h2>
          <div className="flex gap-1 flex-wrap">
            {information.contact.map((contact) => (
              <ContactItem
                key={contact.id}
                className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
                {...contact}
              >
                {contact.name}
              </ContactItem>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Introduce markdown={information.markdown} />
      </div>
    </div>
  );
};

export default Information;
