import { supabase } from "@/lib/supabase/supabase";
import { useSkillStore } from "@/lib/zustand/useSkillStore";

export const skillListRouter = {
    async getSkillList() {
        try {
            const { data: skillList, error } = await supabase.from("skill_list").select()
            if (error) throw new Error(error.message)
            const sortedSkills = skillList.sort((a, b) => a.id - b.id)
            useSkillStore.setState({ skillList: sortedSkills })
        } catch (error) {
            console.error(error);
            return error
        }
    }
}