<script lang="ts" setup>
import { useData } from 'vitepress'

const { frontmatter } = useData() // This is the frontmatter of the current Markdown file
</script>

<template>
  <BlogPost v-if="frontmatter.layout === 'blog-post'" />

  <Content v-else /> // Just render the content of the Markdown file
</template>