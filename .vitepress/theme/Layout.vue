<script lang="ts" setup>
const { frontmatter } = useData();
</script>

<template>
  <div class="min-h-screen bg-deskfolio-bg">
    <TheHeader />

    <div class="px-4 py-16">
      <main class="mx-auto max-w-screen-md">
        <Transition
          name="page"
          mode="out-in"
          appear
        >
          <Home v-if="frontmatter.layout === 'home'" />

          <BlogIndex v-else-if="frontmatter.layout === 'blog'" />
          <BlogShow v-else-if="frontmatter.layout === 'blog-show'" />
        </Transition>
      </main>
    </div>
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
