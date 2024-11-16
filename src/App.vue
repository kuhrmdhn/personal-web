<script setup>
import About from "./ui/components/About.vue";
import Contact from "./ui/components/Contact.vue";
import Academic from "./ui/components/Academic.vue";
import Footer from "./ui/components/Footer.vue";
import Header from "./ui/components/Header.vue";
import Home from "./ui/components/Home.vue";
import Project from "./ui/components/Project.vue";
import Skill from "./ui/components/Skill.vue";
import Navigation from "./ui/elements/Navigation.vue";
</script>

<template>
  <div>
    <Navigation />
    <Header />
    <Home />
    <About />
    <Skill />
    <Academic/>
    <Project />
    <Contact />
    <Footer />
  </div>
</template>
