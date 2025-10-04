<script lang="ts" setup>
import { House, BookText } from 'lucide-vue-next';

const { site } = useData();
</script>

<template>
  <header class="border-b border-deskfolio-bg-lighter bg-deskfolio-bg/80 backdrop-blur-sm p-6">
    <div
      class="mx-auto flex max-w-screen-lg flex-col items-center justify-between gap-6 md:flex-row"
    >
      <span>
        <a href="/" class="text-xl font-semibold text-deskfolio-text hover:text-deskfolio-blue-light transition-colors duration-200">
          {{ site.title }}
        </a>
      </span>

      <nav class="flex items-center gap-6">
        <a
          href="/"
          title="Home"
          class="text-deskfolio-text-muted hover:text-deskfolio-blue transition-colors duration-200"
        >
          <House :size="24" />
        </a>
        <a
          href="/blog"
          title="Blog"
          class="text-deskfolio-text-muted hover:text-deskfolio-blue transition-colors duration-200"
        >
          <BookText :size="24" />
        </a>
      </nav>
    </div>
  </header>
</template>
