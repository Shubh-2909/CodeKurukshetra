import { useState } from "react";
import { motion } from "framer-motion";
import { Collapse } from "react-collapse";
import { IoIosArrowDown } from "react-icons/io";

const AskedQuestions = () => {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState();
  const questionData = [
    {
      question: "What are the criteria for participating in this hackathon?",
      answer:
        "Anyone who has passion for developing something productive for the society, wants a thrill of competing against other innovative minds and the clock as well and is studying in any academic institute in India at an undergraduate level can take part in this event. We love diversity and inclusivity, and we would love to see you at the event.",
      id: 0,
    },
    {
      question: "Can we register as a team?",
      answer:
        "Sure you can register as a team and minimum two members are compulsory. The cap on the number of team members is limited to 4 per team.",
      id: 1,
    },

    {
      question: "Is it theme based event?",
      answer:
        "The event focuses on participants solving the predefined problems which have been supplied to them via the brochure and through the website of CodeKurukshetra. We want everyone to follow the problem statements only and choosing any other project other than that would lead to disqualifying the individual/team.",
      id: 3,
    },
    {
      question: "Will there be participation certificate/ goodies?",
      answer:
        "Of Course, participation certificate would be provided to everyone who takes part in the second round of the hackathon. Talking about the goodies, we have a lot of things planned for you and so a lot of goodies.",
      id: 4,
    },
  ];
  return (
    <div
      id="faq"
      className="bg-[#00000080] relative py-10 md:px-20 sm:px-8 px-4  w-[100%] min-h-[70vh]"
    >
      <h1 className="text-center mb-8 font-[Varela] text-[#8F8EE9] font-bold text-5xl">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-1">
        {questionData.map((questions, i) => {
          return (
            <div
              className="cursor-pointer   my-4  text-slate-200 md:mx-12 mx-4"
              key={i}
            >
              <div
                className="relative bg-[rgb(255,255,255,0.1)] px-10 py-4 rounded-lg"
                onClick={() => {
                  setOpen(!open);
                  setActiveId(i);
                }}
                x
              >
                <p className="text-xl">{questions.question}</p>
                <div className="arrowfaq">
                  <IoIosArrowDown
                    className={`${
                      open && i === activeId ? "rotate-180" : "rotate-0"
                    } transition-all`}
                  />
                </div>
              </div>
              <div
                className={`${
                  open && i === activeId ? "block" : "hidden"
                } transition duration-1000`}
              >
                <motion.p className="bg-[rgb(11,22,35,0.5)] px-10 py-2 mt-3 rounded-lg">
                  {questions.answer}
                </motion.p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AskedQuestions;
