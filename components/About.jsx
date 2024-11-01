import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User2, Mail, HomeIcon, PhoneCall, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";

const infoData = [
  {
    icon: <User2 size={20} />,
    name: "Tayyab Cheema",
  },
  {
    icon: <PhoneCall size={20} />,
    name: "+92 309 2867068",
  },
  {
    icon: <Mail size={20} />,
    name: "tayyabcheemadev@gmail.com",
  },
  {
    icon: <GraduationCap size={20} />,
    name: "BS-CS from University of Gujrat",
  },
  {
    icon: <HomeIcon size={20} />,
    name: "Mandi-Baha-Uddin",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "University of Gujrat",
        qualification: "Bachelor in Computer Science",
        years: "Nov 2020 - July 2024",
      },
      {
        university: "Coursera",
        qualification: "Meta Certified Full-Stack Developer",
        years: "Jan 2023 - August 2023",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Rev9 Solutions",
        role: "Full Stack Developer",
        years: "November 2024 - Present",
      },
      {
        company: "SkillShaks",
        role: "Backend Developer",
        years: "April 2024 - July 2024",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Reactjs, Nextjs",
      },
      {
        name: "TailwindCSS, Material UI",
      },
      {
        name: "Javascript, Typescript",
      },
      {
        name: "Expressjs, Nestjs, Nodejs",
      },
      {
        name: "Mongodb, MySQL, PostgreSQL"
      },
      {
        name: "AWS, REST API's ",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgSrc="/about/dev.png" />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
              </TabsList>
              {/* Tabs Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Unmatched service quality for over 2 years</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experiences.</p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.name}</div>
                        </div>
                      ))}
                    </div>
                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skills</div>
                      <div className="border-b border-border">
                        <div>English, Urdu & Punjabi</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                    {/* Experience and Education Wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map((item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I use Everyday</h3>
                    {/* Skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4">
                        {/* Skill List */}
                        <div>
                          {getData(skillData, "skills").data.map((item, index)=>{
                            const {name} = item
                            return (
                              <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                <div className="font-medium">{name}</div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                      <div className="border-b border-border mb-4">
                        {/* Tools List */}
                        <div className="flex gap-x-8 justify-center xl:justify-start ">
                          {getData(skillData, "tools").data.map((item, index)=>{
                            const {imgPath} = item
                            return(
                              <div key={index}>
                                <Image src={imgPath} width={48} height={48} alt='' priorty/>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
