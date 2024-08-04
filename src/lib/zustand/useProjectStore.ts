import { Project } from "@/types/ProjectTypes";
import { create } from "zustand";

type Store = {
    projectList: Project[]
}

export const useProjectStore = create<Store>()((set) => ({
    projectList: []
}))