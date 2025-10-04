<script lang="ts" setup>
import { siBluesky, siGithub } from "simple-icons";
</script>

<template>
    <Page>
        <section>
            <PageTitle title="Welcome!" />

            <div
                class="border-deskfolio-bg-lighter bg-deskfolio-bg-light mt-12 rounded-xl border p-8 shadow-xl"
            >
                <Prose class="prose-lg">
                    <Content />
                </Prose>
            </div>
        </section>

        <section>
            <h2 class="text-deskfolio-text text-3xl font-semibold">
                Find me online
            </h2>

            <div
                class="mt-8 flex flex-wrap items-center justify-center gap-6 md:justify-start"
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
