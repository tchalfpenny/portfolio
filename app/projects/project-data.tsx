export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "TyGPT",
    year: 2025,
    description: "GPT-2 (124M) architecture LLM",
    url: "https://github.com/tchalfpenny/TyGPT"
  },
  {
    title: "Upper-Limb Joint Prediction with IMUs",
    year: 2024,
    description: "ML model + digital twin",
    url: "https://github.com/stevenc15/upper-limb-joint-prediction"
  },
   {
    title: "Money Master",
     year: 2024,
    description: "MERN financial application",
    url: "https://github.com/j-messina23/moneymaster"
  },
  {
    title: "Tidal Ties",
     year: 2024,
    description: "LAMP contact manager",
    url: "https://github.com/viimalys/COP4331-contact-manager"
  },
];
