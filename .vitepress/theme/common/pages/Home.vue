<script lang="ts" setup>
import { siBluesky, siGithub } from "simple-icons";
const { frontmatter } = useData();
</script>

<template>
    <Page>
        <!-- Title at top left -->
        <PageTitle :title="frontmatter.title!" class="mb-12" />

        <!-- Two-column layout: text left, image right -->
        <section class="mb-16">
            <div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
                <!-- Left column: Text content -->
                <div>
                    <Prose class="prose-lg">
                        <Content />
                    </Prose>
                </div>

                <!-- Right column: Profile image -->
                <div class="flex justify-center lg:justify-end">
                    <img
                        v-if="frontmatter.image"
                        :src="frontmatter.image"
                        alt="Profile Picture"
                        class="border-deskfolio-blue w-full max-w-sm border-1 shadow-xl"
                    />
                </div>
            </div>
        </section>

        <!-- Find me online section at bottom -->
        <section>
            <h2 class="text-deskfolio-text mb-8 text-3xl font-semibold">
                Find me online
            </h2>

            <div
                class="flex flex-wrap items-center justify-center gap-6 md:justify-start"
            >
                <a
                    href="https://bsky.app/profile/driky.bsky.social"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group text-deskfolio-blue decoration-deskfolio-blue/40 hover:text-deskfolio-blue-light hover:decoration-deskfolio-blue-light/60 inline-flex items-center gap-2 underline underline-offset-4 transition-colors"
                >
                    <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 fill-current"
                    >
                        <title>Bluesky</title>
                        <path :d="siBluesky.path" />
                    </svg>
                    <span class="font-medium">Bluesky</span>
                </a>

                <a
                    href="https://github.com/Driky"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group text-deskfolio-blue decoration-deskfolio-blue/40 hover:text-deskfolio-blue-light hover:decoration-deskfolio-blue-light/60 inline-flex items-center gap-2 underline underline-offset-4 transition-colors"
                >
                    <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 fill-current"
                    >
                        <title>GitHub</title>
                        <path :d="siGithub.path" />
                    </svg>
                    <span class="font-medium">GitHub</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/cedric-on-the-grid/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group text-deskfolio-blue decoration-deskfolio-blue/40 hover:text-deskfolio-blue-light hover:decoration-deskfolio-blue-light/60 inline-flex items-center gap-2 underline underline-offset-4 transition-colors"
                >
                    <span class="font-medium">LinkedIn</span>
                </a>
            </div>
        </section>
    </Page>
</template>
