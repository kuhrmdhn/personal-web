<script setup>
import Header from './ui/components/Header.vue';
import Home from './ui/components/Home.vue';
import About from './ui/components/About.vue';
import Navigation from './ui/elements/Navigation.vue';
import Contact from './ui/components/Contact.vue';
import Skill from './ui/components/Skill.vue';
import Project from './ui/components/Project.vue';
import Footer from './ui/components/Footer.vue';
</script>

<template>
  <div>
    <Navigation />
    <Header />
    <Home />
    <About />
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>
  </div>
</template>
