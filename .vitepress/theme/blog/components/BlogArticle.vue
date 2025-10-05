<script lang="ts">
const blogArticle = tv({
  slots: {
    base: "space-y-12",
    title: "text-5xl font-bold text-deskfolio-text",
    prose: "",
  },
});

export interface BlogArticleProps {
  title: string;
  class?: any;
  ui?: Partial<typeof blogArticle.slots>;
}
export interface BlogArticleEmits {}
export interface BlogArticleSlots {}
</script>

<script lang="ts" setup>
const props = defineProps<BlogArticleProps>();
defineEmits<BlogArticleEmits>();
defineSlots<BlogArticleSlots>();

const ui = computed(() => blogArticle());
</script>

<template>
  <article :class="ui.base({ class: [props.class, props.ui?.base] })">
    <h1 :class="ui.title({ class: props.ui?.title })">
      {{ props.title }}
    </h1>
    <Prose :class="ui.prose({ class: props.ui?.prose })">
      <Content />
    </Prose>
  </article>
</template>
