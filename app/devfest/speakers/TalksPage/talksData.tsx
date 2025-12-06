import Aniedi from "@/app/assets/images/Speakers/Aniedi.jpg";
import Carlos from "@/app/assets/images/Speakers/Carlos_Mota.png";
import Mustapha from "@/app/assets/images/Speakers/Mustapha.jpeg";
import UdeshUdayakumar from "@/app/assets/images/Speakers/UdeshUdayakumar.png";
import Elvis from "@/app/assets/images/Speakers/Elvis.jpeg";
import chichi from "@/app/assets/images/Speakers/Dr._Chichi_Afiah_Headshot .jpeg";
import Ibrahim from "@/app/assets/images/Speakers/Ibrahim_Halidu_Picture_.jpg";
import Iroh from "@/app/assets/images/Speakers/Iroh_Nkechi_Omolola.jpeg";
import Djoume from "@/app/assets/images/Speakers/Djoumé.jpg";
import Etornam from "@/app/assets/images/Speakers/Etornam.jpg";
import Akweley from "@/app/assets/images/Speakers/Akweley.jpg";
import WesleyKambale from "@/app/assets/images/Speakers/wes_kambale.jpg";
import Jamiu from "@/app/assets/images/Speakers/Jamiu.jpg";
import ToluAlabi from "@/app/assets/images/Speakers/ToluAlabi.jpeg";
import ShadrackInusah from "@/app/assets/images/Speakers/ShadrackInusah.jpg";
import Paul from "@/app/assets/images/Speakers/paul.jpg";
import IbukunAyomide from "@/app/assets/images/Speakers/IbukunAyomide-Baafog.jpeg";
import GordonFiifiDonkoh from "@/app/assets/images/Speakers/GordonFiifiDonkoh.jpg";
import GiftyAsamoah from "@/app/assets/images/Speakers/GiftyAsamoah.jpg";
import Sodiq from "@/app/assets/images/Speakers/Sodiq.jpeg";
import WayneGakuo from "@/app/assets/images/Speakers/Wayne_Potrait.jpg";
import George from "@/app/assets/images/Speakers/George.jpg";
import James from "@/app/assets/images/Speakers/James.jpg";
import { StaticImageData } from "next/image";

export interface Talk {
  id: number;
  speaker: string;
  title: string;
  speakerImage: StaticImageData;
  time: string;
  speakerRole: string;
  speakerBio: string;
  linkedin: string;
  twitter: string;
}

export const day1Talks: Talk[] = [
  {
    id: 1,
    speaker: "Okai Abena Akweley",
    title: "Building Safe, Secure and Scalable Solutions with AI and Cloud",
    speakerImage: Akweley,
    time: "4:15PM (GMT)",
    speakerRole: "AI Marketing Strategist",
    speakerBio:
      "Marketing strategist and entrepreneur driving the adoption of AI and cloud innovations across emerging and global markets. She is Co-founder of Beeva AI and a tech podcast marketer spotlighting Ghana’s tech ecosystem, blending entrepreneurial experience, and digital storytelling. Passionate about inclusive innovation, she advises and mentors founders on inclusive innovation and growth strategies for AI solutions",
    linkedin: "https://www.linkedin.com/in/acquels/",
    twitter: "https://x.com/acquels_/",
  },
  {
    id: 2,
    speaker: "Aniedi Udo-Obong",
    title: "Innovation Culture in the Age of Super Intelligence.",
    speakerImage: Aniedi,
    time: "4:50PM (GMT)",
    speakerRole: "Program Manager",
    speakerBio:
      "Experienced Program Manager with a demonstrated history of working in the technology industry. Skilled in Management, Networking, Software Development, Start-ups, and Project Management. Strong program and project management professional with a Bachelor of Engineering focused in Electrical/Electronics Engineering.",
    linkedin:
      "https://www.linkedin.com/in/aniediudo/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/aniediudo",
  },
  {
    id: 3,
    speaker: "Carlos Mota",
    title: "Building Inclusive AI Experiences with Sign Language and GenAI.",
    speakerImage: Carlos,
    time: "5:20PM (GMT)",
    speakerRole: "Lead Software Engineer",
    speakerBio:
      "An Android GDE. He can easily be spotted either working on Android applications written in Kotlin or developing them along with Kotlin Multiplatform. An enthusiast for new technologies, he's always trying to reach those last 20% of all of his side projects that seem to be really far away.",
    linkedin: "https://www.linkedin.com/in/cafonsomota/",
    twitter: "https://x.com/cafonsomota",
  },
  {
    id: 4,
    speaker: "Mustapha Adekunle",
    title: "AI Agents, The New Frontier for LLMs.",
    speakerImage: Mustapha,
    time: "5:50PM (GMT)",
    speakerRole: "Data Engineer and Advocate",
    speakerBio:
      "Mustapha leads Cloud Training initiatives at Google's first-ever global Centre of Excellence in Doha. With over five years at Google Cloud, he has held diverse roles including Training, Delivery, Cloud Consulting, Customer Engineering, DevOps/Infrastructure Engineering, and Business Analysis. His expertise covers Infrastructure Modernization, Automation, DevOps, and Kubernetes on GCP.",
    linkedin: "https://www.linkedin.com/in/MustaphaAdekunle/",
    twitter: "https://x.com/engr_krooozy",
  },
  {
    id: 5,
    speaker: "Dr.Chichi Afiah",
    title:
      "Human-Centered Leadership: Building an AI-Ready Culture Where People and Technology Thrive.",
    speakerImage: chichi,
    time: "6:50PM (GMT)",
    speakerRole: "Product Coach | Business Agility Leader | Product Manager",
    speakerBio:
      "Dr. Chichi Afiah is a trusted authority in leadership coaching, keynote speaking, and organizational transformation, delivering bold insights that inspire action and drive results. As the founder of Lead with Dr. Chichi Afiah, she combines her expertise as an internationally recognized Business Agility leader, systems coach, and dynamic speaker and host to empower leaders and transform organizations.",
    linkedin: "https://www.linkedin.com/in/coachchichi-afiah/",
    twitter: "#",
  },
  {
    id: 6,
    speaker: "Udesh Udayakumar",
    title: "Building Autonomous AI using Google Cloud.",
    speakerImage: UdeshUdayakumar,
    time: "6:50PM (GMT)",
    speakerRole: "Training Manager",
    speakerBio:
      "Udesh leads Cloud Training initiatives at Google's first-ever global Centre of Excellence in Doha. With over five years at Google Cloud, he has held diverse roles including Training, Delivery, Cloud Consulting, Customer Engineering, DevOps/Infrastructure Engineering, and Business Analysis. His expertise spans Infrastructure Modernization, Automation, DevOps, and Kubernetes on GCP.",
    linkedin: "https://www.linkedin.com/in/udesh-udayakumar/",
    twitter: "https://x.com/udeshthepilot?lang=en",
  },
  {
    id: 7,
    speaker: "Ibrahim Halidu",
    title:
      "Beyond Code: Building the Mindset and Attitude for Career Excellence in Tech.",
    speakerImage: Ibrahim,
    time: "7:20PM (GMT)",
    speakerRole: "Digital Transformation Leader",
    speakerBio:
      "Ibrahim is a passionate advocate for entrepreneurship, digital transformation, AI adoption, and women's empowerment. He is committed to building thriving startup and tech ecosystems in Ghana and across Africa through strong partnerships, collaborations, and innovation programs.",
    linkedin: "https://www.linkedin.com/in/ibrahim-halidu/",
    twitter: "#",
  },
  {
    id: 8,
    speaker: "Iroh Nkechi Omolola",
    title: "The Power of Micro-Interactions in Web UX.",
    speakerImage: Iroh,
    time: "7:50PM (GMT)",
    speakerRole: "UX Designer",
    speakerBio:
      "Iroh is a passionate UX Designer focused on creating meaningful micro-interactions that enhance user experience and drive engagement in web applications.",
    linkedin: "https://www.linkedin.com/in/iroh-nkechi/",
    twitter: "https://x.com/iroh_nkechi",
  },

  {
    id: 9,
    speaker: "Elvis Kwabena Asare Nkrumah",
    title: "From Curiosity to Clarity: Demystifying Data for Everyday Impact",
    speakerImage: Elvis,
    time: "8:20PM (GMT)",
    speakerRole: "Data Analysis",
    speakerBio:
      "Elvis is a Computer Science and Statistics graduate passionate about data analysis, market research, and problem-solving. He thrives on uncovering insights that drive smarter decision-making and applies his skills in financial data analysis, machine learning, statistical research, and technical writing.",
    linkedin: "https://www.linkedin.com/in/elviskankrumah/",
    twitter: "https://x.com/europython",
  },
  {
    id: 10,
    speaker: "Djoume Salvetti",
    title: "Building an AI app to Accelerate Learning",
    speakerImage: Djoume,
    time: "8:50PM (GMT)",
    speakerRole: "Co-Founder fata.dev & fata.school",
    speakerBio:
      "Djoume is a passionate technical leader with over 20 years of experience. He has developed strong leadership, managerial, and technical skills throughout his career.",
    linkedin: "https://www.linkedin.com/in/djoume/",
    twitter: "#",
  },
];

export const day2Talks: Talk[] = [
  {
    id: 11,
    speaker: "Shadrack Inusah",
    title: "Keynote - GDG Accra",
    speakerImage: ShadrackInusah,
    time: "9:00am – 9:25am (GMT)",
    speakerRole: "Community Manager",
    speakerBio:
      "Shadrack is a Software Engineer, Community Manager, Project Manager, Cloud specialist, and startup founder. He combines technical expertise with leadership experience to build impactful projects and foster thriving tech communities.",
    linkedin: "https://www.linkedin.com/in/shadrack-inusah/",
    twitter: "https://x.com/kojo_shaddy",
  },
  {
    id: 12,
    speaker: "Sodiq Akinjobi",
    title: "Keynote - Developer Ecosystem",
    speakerImage: Sodiq,
    time: "9:25am – 9:50am (GMT)",
    speakerRole: "Developer Relations | Program Management",
    speakerBio:
      "Sodiq is an accomplished Program Manager with over five years of experience in global marketing, community building, and social media platforms. He brings a wealth of knowledge and skills, with a proven track record in streamlining documentation flow, implementing community strategies, planning and organising events and hackathons, leading product teams, coordinating testing and technical documentation, and conducting market research.",
    linkedin: "https://www.linkedin.com/in/geektutor/",
    twitter: "#",
  },
  {
    id: 13,
    speaker: "Ibukun Ayomide-Baafog",
    title:
      "Designing for Impact: Building Human-Centered Products in an AI-Driven World",
    speakerImage: IbukunAyomide,
    time: "10:15am – 10:40am (GMT)",
    speakerRole: "UX Mentor/Coach",
    speakerBio:
      "Ibukun Ayomide-Baafog has a natural talent for bringing people and ideas together. She has evolved from operations and management to product design, carrying forward her deep understanding of user needs and team dynamics.",
    linkedin: "https://www.linkedin.com/in/ibukun-ayomide-baafog/",
    twitter: "#",
  },
  {
    id: 14,
    speaker: "Etornam Bright Sunu",
    title:
      "Panel: Building Safe, Secure and Scalable Solutions with AI and Cloud",
    speakerImage: Etornam,
    time: "10:45am – 11:05am (GMT)",
    speakerRole: "Google Developer Expert Flutter",
    speakerBio:
      "AI researcher and Google Developer Expert with over 8 years of experience in software development. I specialize in artificial intelligence, machine learning, and cutting-edge software solutions. My research focuses on AI accessibility, programming education, and ethical AI development.",
    linkedin: "https://www.linkedin.com/in/etornam-sunu/",
    twitter: "https://x.com/_iamEtornam",
  },
  {
    id: 15,
    speaker: "Tolu Alabi",
    title:
      "Panel: Building Safe, Secure and Scalable Solutions with AI and Cloud",
    speakerImage: ToluAlabi,
    time: "10:45am – 11:05am (GMT)",
    speakerRole: "Co-founder & CEO, Cleva",
    speakerBio:
      "Co-founder and CEO at Cleva (YC W24) with prior experience at Stripe and Amazon. Experienced in building scalable fintech products, leading high-growth startups, and driving technology innovation. Passionate about product-led growth, developer-focused solutions, and modern payment infrastructure.",
    linkedin: "https://www.linkedin.com/in/tolu-alabi-08697525/",
    twitter: "#",
  },
  {
    id: 16,
    speaker: "George Plange",
    title:
      "Panel: Building Safe, Secure and Scalable Solutions with AI and Cloud",
    speakerImage: George,
    time: "10:45am – 11:05am (GMT)",
    speakerRole: "Lead, Intelligent Automation - Stanbic Bank Ghana",
    speakerBio:
      "A digital transformation professional, dedicated Senior Business Analyst, and Certified Scrum Product Owner with experience in high-level agile and waterfall business environments. Has extensive knowledge in the area of data analytics, financial modeling using Microsft Excel, SQL, and Power BI. I deliver product vision, ensure vision alignment with overall product company strategy is met. My in-depth knowledge through coordination with software developers has enabled the successful delivery of over 60 projects to create custom applications and trackers to achieve client goals.",
    linkedin: "https://www.linkedin.com/in/georgeplange/",
    twitter: "#",
  },
  {
    id: 17,
    speaker: "Gordon Fiifi Donkoh",
    title:
      "Panel: Building Safe, Secure and Scalable Solutions with AI and Cloud",
    speakerImage: GordonFiifiDonkoh,
    time: "10:45am – 11:05am (GMT)",
    speakerRole: "Chief Information Security Officer, AmaliTech",
    speakerBio:
      "Securing and Building Unimaginable Technology. Chief Information Security Officer at AmaliTech and Founder of The Digicoast. Experienced in cybersecurity strategy, digital innovation, and building resilient tech ecosystems. Passionate about empowering tech communities and developing next-generation solutions.",
    linkedin: "https://www.linkedin.com/in/fiifigordon/",
    twitter: "#",
  },
  {
    id: 18,
    speaker: "Wayne Gakuo",
    title:
      "Beyond the Binge: Building Smart Movie & TV Recommendations with Angular, Genkit & Firebase",
    speakerImage: WayneGakuo,
    time: "11:05am - 12:35pm (GMT)",
    speakerRole: "GDE Angular",
    speakerBio:
      "A Google Developer Expert in Angular and a Senior Frontend Engineer dedicated to mastering best practices for architecting software with a focus on scalability, maintainability, and user needs. As an Angular trainer, I also provide software engineering training, equipping professionals with the technical skills to build robust web applications using Angular.",
    linkedin: "https://www.linkedin.com/in/waynegakuo/",
    twitter: "https://x.com/wayne_gakuo/",
  },
  {
    id: 19,
    speaker: "Wesley Kambale",
    title:
      "Building and Deploying an Agent with a Reasoning Engine with Vertex AI.",
    speakerImage: WesleyKambale,
    time: "11:05am - 12:35pm (GMT)",
    speakerRole: "GDE Artificial Intelligence (AI)",
    speakerBio:
      "Wesley is a machine learning engineer and data scientist, and a Google Developer Expert for Artificial Intelligence (AI) adept at crafting production-ready ML systems that provide impactful solutions in the African market.",
    linkedin: "https://www.linkedin.com/in/weskambale/",
    twitter: "https://x.com/weskambale",
  },
  {
    id: 20,
    speaker: "Jamiu Okanlawon",
    title: "A Developer's Guide to Generative AI with Flutter and Firebase",
    speakerImage: Jamiu,
    time: "11:05am - 12:35pm (GMT)",
    speakerRole: "Developer Advocate",
    speakerBio:
      "Jamiu is a Developer Advocate specializing in Dart and Flutter. He is passionate about server-side development and helps developers build full-stack applications with Dart.",
    linkedin: "https://www.linkedin.com/in/developerjamiu/",
    twitter: "#",
  },

  {
    id: 21,
    speaker: "Paul Boamah",
    title: "Building AI App That Doesn't Break: The Architecture Advantage",
    speakerImage: Paul,
    time: "11:05am - 12:35pm (GMT)",
    speakerRole: "Software Engineer, Stanbic Bank Ghana",
    speakerBio:
      "Senior software developer with 7+ years of hands-on experience in full-stack development, system architecture design, advanced design patterns, machine learning integration, and delivering innovative software solutions.",
    linkedin: "https://www.linkedin.com/in/paul-boamah/",
    twitter: "#",
  },
  {
    id: 22,
    speaker: "James Mwai",
    title:
      "Deploying Open LLMs on Cloud Run: Fast, Scalable Inference with Gemma-3",
    speakerImage: James,
    time: "11:05am - 12:35pm (GMT)",
    speakerRole: "Google Developer Expert, Cloud",
    speakerBio:
      "Experienced Software Engineer with a demonstrated history of working in the information technology and services industry. ",
    linkedin: "https://www.linkedin.com/in/paul-boamah/",
    twitter: "#",
  },
  {
    id: 23,
    speaker: "Gifty Asamoah",
    title:
      "AI for Mental Health: Deploying Empathetic Bots with Firebase Studio",
    speakerImage: GiftyAsamoah,
    time: "2:25pm – 2:50pm (GMT)",
    speakerRole: "Innovator || Cortexx Ai Community",
    speakerBio:
      "Focused on Digitalization and Digital Strategies across Africa, Emerging Technologies, Youth Empowerment, and Artistic Collaborations. Experienced in driving tech adoption, fostering innovation, and creating opportunities for young leaders. Passionate about bridging technology, creativity, and social impact.",
    linkedin: "https://www.linkedin.com/in/gifty-asamoah-344172a7/",
    twitter: "#",
  },
];
