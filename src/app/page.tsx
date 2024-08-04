"use client"
import { skillListRouter } from "@/database/skillListRouter";
import AboutPage from "./(sectionPage)/AboutPage";
import HomePage from "./(sectionPage)/HomePage";
import ProjectListPage from "./(sectionPage)/ProjectListPage";
import SkillListPage from "./(sectionPage)/SkillListPage";
import { useEffect } from "react";
import { projectRouter } from "@/database/projectListRouter";

export default function Home() {
  const { getSkillList } = skillListRouter
  const { getProjectList } = projectRouter
  useEffect(() => {
    getSkillList()
    getProjectList()
  }, [getSkillList, getProjectList])

  return (
    <main className="font-dosis">
      <HomePage />
      <AboutPage />
      <SkillListPage />
      <ProjectListPage />
    </main>
  );
}
