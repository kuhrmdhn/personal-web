import { skillList } from "@/types/SkillTypes"
import { create } from "zustand"

type Store = {
    skillList: skillList[],
}

export const useSkillStore = create<Store>()((set) => ({
    skillList: [{name: "", image: ""}],
}))