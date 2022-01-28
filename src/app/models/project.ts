export interface Project {
  name:string,
  picture:string,
  description:string,
  live:string,
  gitHub:string,
  type:ProjectType,
}
export enum ProjectType {
  full = "Full-stack",
  front = "Front-end",
  back = "Back-end",
  game = "Mobile game",
  app = "Mobile app",
}
