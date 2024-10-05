import { supabase } from "@/lib/supabase/supabase"
import { useProjectStore } from "@/lib/zustand/useProjectStore"

export const projectRouter = {
    async getProjectList(limit?: number) {
        try {
            limit = limit || 2
            const { data: limitedProject, error } = await supabase.from("project_list").select().order("id", { ascending: true }).range(0, limit)
            if (error) throw new Error(error.message)
            const sortedProjects = limitedProject.sort((a, b) => a.id - b.id)
            useProjectStore.setState({ projectList: sortedProjects })
        } catch (error) {
            return error
        }
    }
}