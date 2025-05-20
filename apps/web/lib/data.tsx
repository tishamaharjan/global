import { Code, Search, Layout, Cpu, CheckCircle, Layers } from "lucide-react";
import { Service, Project } from "@/lib/types";

export const services: Service[] = [
  {
    id: 1,
    name: "Software Development",
    description:
      "Custom software solutions built with cutting-edge technologies to solve complex business challenges.",
    icon: <Code className="h-4 w-4 text-[#BDFF00]" />,
    class: "top-[10%] right-[25%] md:right-[20%]",
  },
  {
    id: 2,
    name: "UI/UX Design",
    description:
      "Creating intuitive and engaging user experiences with beautiful, functional designs.",
    icon: <Layout className="h-4 w-4 text-[#BDFF00]" />,
    class: "top-[30%] right-[10%]",
  },
  {
    id: 3,
    name: "AI Powered Assistant",
    description:
      "Intelligent virtual assistants and AI solutions to automate processes and enhance productivity.",
    icon: <Cpu className="h-4 w-4 text-[#BDFF00]" />,
    class: "bottom-[30%] left-[10%]",
  },
  {
    id: 4,
    name: "Quality Assurance",
    description:
      "Comprehensive testing and quality assurance to ensure reliable, bug-free software.",
    icon: <CheckCircle className="h-4 w-4 text-[#BDFF00]" />,
    class: "bottom-[20%] left-[30%]",
  },
  {
    id: 5,
    name: "Innovation",
    description:
      "Innovative solutions that help businesses stay ahead of the competition.",
    icon: <Search className="h-4 w-4 text-[#BDFF00]" />,
    class: "top-[30%] left-[15%]",
  },
  {
    id: 6,
    name: "System Architecture",
    description:
      "Designing robust, scalable system architectures that support business growth and evolution.",
    icon: <Layers className="h-4 w-4 text-[#BDFF00]" />,
    class: "bottom-[20%] right-[15%]",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Resource Planning System",
    description:
      "A comprehensive ERP solution for a multinational manufacturing company.",
    image:
      "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "PostgreSQL", "Redux"],
  },
  {
    id: 2,
    title: "AI-Driven Customer Analytics Platform",
    description:
      "Machine learning platform that processes customer data to generate actionable insights.",
    image:
      "https://images.pexels.com/photos/4644777/pexels-photo-4644777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "TensorFlow", "Next.js", "AWS"],
  },
  {
    id: 3,
    title: "Mobile Banking Application",
    description:
      "Secure and intuitive mobile banking application with biometric authentication.",
    image:
      "https://images.pexels.com/photos/6347919/pexels-photo-6347919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React Native", "GraphQL", "Firebase", "Stripe"],
  },
  {
    id: 4,
    title: "Smart City IOT Dashboard",
    description:
      "Real-time monitoring dashboard for urban infrastructure and services.",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Vue.js", "D3.js", "WebSockets", "MongoDB"],
  },
];

export const stats = [
  { id: 1, value: "10+", label: "Years Experience" },
  { id: 2, value: "200+", label: "Projects Delivered" },
  { id: 3, value: "50+", label: "Global Clients" },
  { id: 4, value: "98%", label: "Client Satisfaction" },
];

export const testimonials = [
  {
    id: 1,
    content:
      "TechNova transformed our business with their innovative solutions. Their team's technical expertise and dedication to quality is unmatched.",
    author: "Akira Tanaka",
    role: "CTO, Fuji Enterprises",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    content:
      "Working with TechNova was a game-changer for our startup. They delivered a sophisticated platform that exceeded our expectations.",
    author: "Sarah Chen",
    role: "Founder, InnovateTech",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    content:
      "TechNova's attention to detail and commitment to innovation helped us launch our product months ahead of schedule.",
    author: "Michael Rodriguez",
    role: "Product Manager, GlobalSoft",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
