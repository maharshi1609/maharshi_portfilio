export type Education = {
  degree: string;
  institution: string;
  period: string;
  startISO: string;
  endISO: string;
  detail?: string;
  level: "Degree" | "Higher Secondary" | "Secondary";
};

export const education: Education[] = [
  {
    degree: "Bachelor's of Engineering in Computer Science",
    institution: "Mahavir Swami College of Engineering and Technology",
    period: "July 2019 – May 2023",
    startISO: "2019-07",
    endISO: "2023-05",
    detail: "CGPA: 7.66 / 10",
    level: "Degree",
  },
  {
    degree: "HSC",
    institution: "Uttar Gujarat",
    period: "July 2018 – May 2019",
    startISO: "2018-07",
    endISO: "2019-05",
    level: "Higher Secondary",
  },
  {
    degree: "SSC",
    institution: "Jivan Bharti School",
    period: "July 2016 – May 2017",
    startISO: "2016-07",
    endISO: "2017-05",
    level: "Secondary",
  },
];
