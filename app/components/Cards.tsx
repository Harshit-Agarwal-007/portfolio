import React from 'react'
import { Card, CardTitle, HoverEffect } from './ui/card-hover-effect'
import { CardDescription } from './ui/card-hover-effect'

export const projects = [
    {
      title: "Inorgadeck",
      description:
        "Inorgadeck represents an innovative fusion of learning tools and gaming elements, specifically tailored to enhance the understanding and retention of inorganic chemistry reactions. Technologies Used: HTML, CSS, REACTJS, TAILWIND CSS, Javascript",
      link: "https://inorgadeck.vercel.app/",
    },
    {
      title: "My Portfolio",
      description:
        "As part of my ongoing commitment to professional development and showcasing my skills, I undertook a project to create a dynamic and responsive personal website. Technologies Used: HTML, CSS, REACTJS, TAILWIND CSS,Javascript",
      link: "https://github.com/Harshit-Agarwal-007",
    },
 
  ];
 

const cards = () => {
  return (
    <div className="bg-zinc-200 h-[50vh] w-full">  <div className="max-w-5xl mx-auto px-8">
    <HoverEffect items={projects} />
  </div>
</div> 
  )
}

export default cards

