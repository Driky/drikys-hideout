<script lang="ts" setup>
const { frontmatter } = useData();
</script>

<template>
  <Page>
    <BlogArticle :title="frontmatter.title" />

    <!-- <CommentsSection /> -->

    <PageFooter />
  </Page>
</template>
