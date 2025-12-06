import Hanson from "@/app/assets/images/TeamImages/hanson.png";
import Andrews from "@/app/assets/images/TeamImages/Andrews.jpeg";
import Esther from "@/app/assets/images/TeamImages/Esther.jpeg";
import Richard from "@/app/assets/images/TeamImages/Richard.jpeg";
import Michael from "@/app/assets/images/TeamImages/Michael.jpeg";
import CodeRight from "@/app/assets/images/TeamImages/DFShapeLogo.svg";
import KojoShaddy from "@/app/assets/images/TeamImages/kojo_shaddy.jpg";
import Samuella from "@/app/assets/images/TeamImages/samuella.jpg";
import Joshua from "@/app/assets/images/TeamImages/joshua.jpeg";
import King from "@/app/assets/images/TeamImages/King.jpg";
import Bernice from "@/app/assets/images/TeamImages/Bernice.jpeg";
import Akweley from "@/app/assets/images/TeamImages/akweley.jpg";
import Odametey from "@/app/assets/images/TeamImages/odametey.jpg";
import Roberta from "@/app/assets/images/TeamImages/roberta.jpg";
import Nelson from "@/app/assets/images/TeamImages/Nelson.jpeg";
import { StaticImageData } from "next/image";



export interface TeamMember {
  id: number;
  name: string;
  role: string;
  category: string;
  linkedin: string;
  twitter: string;
  image: StaticImageData;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Shadrack Inusah",
    role: "GDG Organiser",
    category: "Organizers",
    linkedin: "https://www.linkedin.com/in/shadrack-inusah/",
    twitter: "https://x.com/kojo_shaddy",
    image: KojoShaddy,
  },
  {
    id: 2,
    name: "Roberta Akoto",
    role: "People Lead",
    category: "Organizers",
    linkedin: "#",
    twitter: "#",
    image: Roberta,
  },
  {
    id: 3,
    name: "Simms Smith",
    role: "Marketing Lead",
    category: "Organizers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
  {
    id: 4,
    name: "Okai Abena Akweley",
    role: "Partnerships Lead Associate",
    category: "Organizers",
    linkedin: "https://www.linkedin.com/in/acquels/",
    twitter: "https://twitter.com/acquels_/",
    image: Akweley,
  },
  {
    id: 5,
    name: "Shadrack Odametey",
    role: "Media/Technical Lead",
    category: "Organizers",
    linkedin: "https://www.linkedin.com/in/shadrack-odametey",
    twitter: "https://x.com/shadlabs",
    image: Odametey,
  },
  {
    id: 6,
    name: "Sosu Alfred",
    role: "Team Member",
    category: "Organizers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
  {
    id: 7,
    name: "Paul Boamah",
    role: "Team Member",
    category: "Organizers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
    {
    id: 8,
    name: "Raymond ",
    role: "Volunteers Lead Associate",
    category: "Organizers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
    {
    id: 9,
    name: "Martha Klenam",
    role: "Volunteers Lead Associate",
    category: "Organizers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
  {
    id: 10,
    name: "Esther Kai Lartey",
    role: "Team Lead",
    category: "Graphic Designers | UIUX Designers",
    linkedin: "#",
    twitter: "#",
    image: Esther,
  },
  {
    id: 11,
    name: "Hamenu Selasi Kofi",
    role: "Team Member",
    category: "Graphic Designers | UIUX Designers",
    linkedin: "#",
    twitter: "#",
    image: Hanson,
  },
  {
    id: 12,
    name: "Andrews Kwame Sessah",
    role: "Team Member",
    category: "Graphic Designers | UIUX Designers",
    linkedin: "#",
    twitter: "#",
    image: Andrews,
  },
    {
    id: 13,
    name: "Dzikunu Nelson",
    role: "Team Member",
    category: "Developers",
    linkedin: "https://www.linkedin.com/in/neldzik-dzikson-3621a31ba/",
    twitter: "https://x.com/dzik_dev?s=21",
    image: Nelson,
  },
  {
    id: 14,
    name: "Bernice Owusu",
    role: "Team Member",
    category: "Developers",
    linkedin: "#",
    twitter: "#",
    image: Bernice,
  },
  {
    id: 15,
    name: "Joshua Amarfio",
    role: "Team Member",
    category: "Developers",
    linkedin: "#",
    twitter: "#",
    image: Joshua,
  },
  {
    id: 16,
    name: "Richard Kweku Aikins",
    role: "Team Member",
    category: "Developers",
    linkedin: "#",
    twitter: "#",
    image: Richard,
  },
  {
    id: 17,
    name: "Priscilla King",
    role: "Team Member",
    category: "Developers",
    linkedin: "#",
    twitter: "#",
    image: King,
  },
  {
    id: 18,
    name: "Lois Frempong",
    role: "Team Member",
    category: "Developers",
    linkedin: "#",
    twitter: "#",
    image: CodeRight,
  },
  {
    id: 19,
    name: "Samuella Manye Aglago",
    role: "Team Member",
    category: "Developers",
    linkedin: "#",
    twitter: "#",
    image: Samuella,
  },
  {
    id: 20,
    name: "Michael Agyemang Prempeh",
    role: "Team Member",
    category: "Developers",
    linkedin: "https://www.linkedin.com/in/agyemangmichael233/",
    twitter: "#",
    image: Michael,
  },
];

export const filters = [
  // "All",
  "Organizers",
  "Developers",
  "Graphic Designers | UIUX Designers",
  // "Content",
];
