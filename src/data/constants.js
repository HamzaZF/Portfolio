export const Bio = {
  name: "Hamza Zarfaoui",
  roles: [
    "Cloud Security Engineer",
    "Cybersecurity Engineer",
    "Developer",
  ],
  description:
    "Passionate about securing digital infrastructures, I help organizations build and maintain secure cloud environments.",
  github: "https://github.com/HamzaZF",
  resume:
    "https://telecomparis.cvdesignr.com/p/67049f8fa33e0",
  linkedin: "https://www.linkedin.com/in/hamza-zarfaoui/",
};

export const skills = [

];

export const experiences = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/fr/archive/d/d9/20090120130733%21Logo_T%C3%A9l%C3%A9com_ParisTech.svg",
    role: "R&D Engineer (Cybersecurity)",
    company: "Télécom Paris",
    date: "September 2024 - Present",
    desc: "I work as an R&D Engineer at the Information Processing and Communications Laboratory (LTCI) at Télécom Paris, where I co-authored a research paper on anonymous payment systems.",
    skills: [
      "Cryptography",
      "ZKP",
      "Noir",
      "Rust",
      "Circom",
      "Python",
      "Gnark",
      "Git",
    ],
    //doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730",
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KbkhKeZH3n9Nr8HWe78BghstO2Bqggwgng&s",
    role: "R&D Engineer (Cybersecurity)",
    company: "EDF",
    date: "October 2022 - September 2024",
    desc: "I worked in the Seido team of the SEQUOIA department of the EDF research center (EDFLab), in collaboration with teacher-researchers from Télécom Paris and EDF engineers and researchers. The team is specialised in cybersecurity and the Internet of Things (IoT), with the main objective of securing exchanges and facilitating the deployment of energy demand management and energy efficiency services. I worked in collaboration with a PhD student in applied mathematics on Zero-Knowledge Proof (ZKP) technology.",
    skills: [
      "Cryptography",
      "ZKP",
      "Noir",
      "Rust",
      "Circom",
      "Python",
      "Gnark",
      "Git",
      "C",
      "C++"
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://nus.edu.sg/images/default-source/identity-images/NUS_logo_full-vertical.jpg",
    school: "National University of Singapore, Singapore",
    date: "August 2024 - March 2026",
    grade: "NA",
    desc: "Currently pursuing a Master by Research in cybersecurity, focusing on discovering novel attacks at the kernel level and developing associated defensive countermeasures.",
    degree: "Master by Research",
  },
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/fr/archive/d/d9/20090120130733%21Logo_T%C3%A9l%C3%A9com_ParisTech.svg",
    school: "Télécom Paris, France",
    date: "September 2021 - July 2024",
    grade: "4/4",
    desc: "Completed a Master's degree in Cybersecurity at Télécom Paris, the leading university in Computer Science in France.",
    degree: "Master's degree in computer science - Specialising in Cybersecurity",
  },
  {
    id: 2,
    img: "https://www.designersplus.fr/media/images/Capture_decran_2022-09-26_a_18.35..2e16d0ba.fill-300x300.png",
    school: "Télécom Saint-Étienne, France",
    date: "September 2019 - July 2021",
    grade: "Top of the Class",
    desc: "Ranked first in a two-year intensive program in Mathematics, Physics, and Computer Science.",
    degree: "Scientific preparatory class",
  },
];

export const projects = [
  {
    id: 0,
    title: "Privacy Preserving Exchange Mechanism",
    date: "Jun 2023 - Jul 2023",
    description:
      "This project implements three Zero-Knowledge Proofs (ZKPs) related to the paper titled \"Privacy-Preserving Exchange Mechanism and its Application to Energy Market\". These ZKPs have been implemented using Gnark, a high-level zk-SNARK library developed by ConsenSys. Gnark is designed for easy circuit design and efficient SNARK proof generation, with support for both Groth16 and PlonK proving systems.",
    image:
      "NA",
    tags: [
      "Gnark",
      "Rust",
      "Algebraic Circuits", 
      "Groth16",
      "Go",
      "ZKP",
      "Zerocash Protocol",
      "Cryptography",
    ],
    category: "Cryptography",
    github: "https://github.com/HamzaZF/Privacy-Preserving-Exchange-Mechanism",
    webapp: "NA",
  },
  {
    id: 1,
    title: "VPC Production Setup with AWS CloudFormation",
    date: "Nov 2023",
    description:
      "This project sets up a production-ready Virtual Private Cloud (VPC) environment on AWS using CloudFormation templates. The architecture includes a secure network with public and private subnets, a bastion host, and a load balancer. It leverages nested stacks, cross-references, and chained stacks to ensure modularity, flexibility, and reusability. This setup follows AWS best practices, providing a scalable and manageable infrastructure.",
    image: "NA", // Provide a link to an image if available
    tags: [
      "AWS CloudFormation",
      "VPC",
      "EC2",
      "ALB",
      "S3",
      "NAT Gateway",
      "Bastion Host",
      "Autoscaling",
      "Security Groups",
      "IaC"
    ],
    category: "Cloud",
    github: "https://github.com/HamzaZF/VPC-production",
    webapp: "NA",
  },

  /*
  {
    id: 1,
    title: "Title",
    date: "Apr 2023 - May 2023",
    description:
      "Description",
    image:
      "https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png",
    tags: [
      "Gnark",
      "Rust",
      "Algebraic Circuits", 
      "Groth16",
      "Go",
      "ZKP",
      "Zerocash Protocol",
      "Finance",
      "Cryptography",
    ],
    category: "Cryptography",
    github: "https://github.com/HamzaZF/Title",
    webapp: "https://podstream.netlify.app/",
    member: [
      {
        name: "Hamza Zarfaoui",
        img: "https://avatars.githubusercontent.com/u/83501010?v=4",
        linkedin: "https://www.linkedin.com/in/hamza-zarfaoui/",
        github: "https://github.com/HamzaZF",
      },
      {
        name: "Nathanaël Simon",
        img: "https://avatars.githubusercontent.com/u/108880305?v=4",
        linkedin: "https://www.linkedin.com/in/nathanael-simon-4a1aaa225/",
        github: "https://github.com/NathSimon",
      },
    ],
  },
  */
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
