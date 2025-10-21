import { Project } from "../types/project";

export async function fetchProjects(): Promise<Project[]> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";

    const response = await fetch(`${baseUrl}/data/projects.json`);
    if (!response.ok) throw new Error("Failed to fetch projects");

    const projects: Project[] = await response.json();
    return projects;
  } catch (error) {
    console.log(error);
    throw new Error(`Could not reach the API to fetch projects.`);
  }
}
