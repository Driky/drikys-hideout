<script lang="ts" setup>
import { ContentData } from 'vitepress'

defineProps<{
  post: ContentData
}>()
</script>

<template>
  <article
    class="group relative rounded-xl bg-deskfolio-bg-light border border-deskfolio-bg-lighter p-8 shadow-lg transition-all duration-300 ease-out space-y-4 hover:shadow-2xl hover:-translate-y-1 hover:border-deskfolio-blue/30 hover:shadow-deskfolio-blue/10"
  >
    <h2 class="text-2xl text-deskfolio-text font-semibold group-hover:text-deskfolio-blue-light transition-colors duration-200">
      <a :href="post.url">
        {{ post.frontmatter.title }}
        <span class="absolute inset-0" />
      </a>
    </h2>

    <p class="text-lg text-deskfolio-text-muted">
      {{ post.frontmatter.description }}
    </p>
  </article>
</template>
