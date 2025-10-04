<script lang="ts">
import type { ContentData } from "vitepress";
import { data } from "../data/blog.data";

interface PostsByYear {
    year: string;
    posts: ContentData[];
}

const blogList = tv({
    slots: {
        base: "space-y-16",
        section: "flex gap-8 items-start",
        yearLabel:
            "text-5xl font-bold text-deskfolio-text-dim whitespace-nowrap flex-shrink-0",
        list: "flex-1 space-y-6",
        listItem: "group relative transition-all duration-200",
        link: "block pb-4 border-b-2 border-transparent hover:border-b-deskfolio-blue hover:shadow-[0_2px_8px_0_rgba(117,186,255,0.4)] transition-all duration-200",
        title: "text-2xl font-semibold text-deskfolio-text group-hover:text-deskfolio-blue transition-colors duration-200",
        description: "mt-2 text-deskfolio-text-muted",
    },
});

export interface BlogListProps {
    class?: any;
    ui?: Partial<typeof blogList.slots>;
}
export interface BlogListEmits {}
export interface BlogListSlots {}
</script>

<script lang="ts" setup>
const props = defineProps<BlogListProps>();
defineEmits<BlogListEmits>();
defineSlots<BlogListSlots>();

const ui = computed(() => blogList());

// Group posts by year
const postsByYear = computed<PostsByYear[]>(() => {
    const grouped = new Map<string, ContentData[]>();

    data.forEach((post) => {
        const year = new Date(post.frontmatter.date).getFullYear().toString();
        if (!grouped.has(year)) {
            grouped.set(year, []);
        }
        grouped.get(year)!.push(post);
    });

    // Convert to array and sort by year (descending)
    return Array.from(grouped.entries())
        .map(([year, posts]) => ({ year, posts }))
        .sort((a, b) => parseInt(b.year) - parseInt(a.year));
});
</script>

<template>
    <div :class="ui.base({ class: [props.class, props.ui?.base] })">
        <section
            v-for="yearGroup in postsByYear"
            :key="yearGroup.year"
            :class="ui.section({ class: props.ui?.section })"
        >
            <!-- Rotated year label -->
            <h2
                :class="ui.yearLabel({ class: props.ui?.yearLabel })"
                style="writing-mode: vertical-rl; transform: rotate(180deg)"
            >
                {{ yearGroup.year }}
            </h2>

            <!-- Ordered list of posts -->
            <ol :class="ui.list({ class: props.ui?.list })">
                <li
                    v-for="post in yearGroup.posts"
                    :key="post.url"
                    :class="ui.listItem({ class: props.ui?.listItem })"
                >
                    <a
                        :href="post.url"
                        :class="ui.link({ class: props.ui?.link })"
                    >
                        <h3 :class="ui.title({ class: props.ui?.title })">
                            {{ post.frontmatter.title }}
                        </h3>
                        <p
                            :class="
                                ui.description({ class: props.ui?.description })
                            "
                        >
                            {{ post.frontmatter.description }}
                        </p>
                    </a>
                </li>
            </ol>
        </section>
    </div>
</template>
