import { ReactNode } from "react";

export interface Service {
  id: number;
  name: string;
  description: string;
  icon: ReactNode;
  class: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  image: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}