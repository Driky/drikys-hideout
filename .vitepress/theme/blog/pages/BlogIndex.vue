<script lang="ts" setup>
const { frontmatter } = useData();
</script>

<template>
  <Page>
    <PageTitle :title="frontmatter.title" />

    <BlogList />

    <PageFooter />
  </Page>
</template>
