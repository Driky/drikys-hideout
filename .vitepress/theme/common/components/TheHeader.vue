<script lang="ts" setup>
const { site } = useData();
</script>

<template>
  <header class="border-b border-deskfolio-bg-lighter bg-deskfolio-bg/80 backdrop-blur-sm p-6">
    <div
      class="mx-auto flex max-w-screen-md flex-col items-center justify-between gap-6 md:flex-row"
    >
      <span>
        <a href="/" class="text-xl font-semibold text-deskfolio-text hover:text-deskfolio-blue-light transition-colors duration-200">
          {{ site.title }}
        </a>
      </span>

      <div class="flex items-center gap-4">
        <Button href="/blog" label="Blog" color="secondary" />
      </div>
    </div>
  </header>
</template>
