import { Project } from "@/types/ProjectTypes";
import { create } from "zustand";

type Store = {
    projectList: Project[],
    setProjectList: (params: Project[]) => void
}

export const useProjectStore = create<Store>()((set) => ({
    projectList: [],
    setProjectList(projectList) {
        set({ projectList })
    },
}))