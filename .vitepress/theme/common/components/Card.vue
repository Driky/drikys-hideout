<script lang="ts">
import type { VariantProps } from "tailwind-variants";

const card = tv({
    slots: {
        base: "group relative rounded-xl bg-deskfolio-bg-light border border-deskfolio-bg-lighter shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:border-deskfolio-blue/30 hover:shadow-deskfolio-blue/10",
        title: "font-semibold text-deskfolio-text group-hover:text-deskfolio-blue-light transition-colors duration-200",
        description: "text-deskfolio-text-muted",
    },
    variants: {
        size: {
            sm: {
                base: "space-y-3 p-6",
                title: "text-xl",
                description: "text-base",
            },
            md: {
                base: "space-y-4 p-8",
                title: "text-2xl",
                description: "text-lg",
            },
        },
    },
    defaultVariants: {
        size: "md",
    },
});

type CardVariants = VariantProps<typeof card>;

export interface CardProps {
    href: string;
    title: string;
    description?: string;
    size?: CardVariants["size"];
    class?: any;
    ui?: Partial<typeof card.slots>;
}
export interface CardEmits {}
export interface CardSlots {}
</script>

<script lang="ts" setup>
const props = defineProps<CardProps>();
defineEmits<CardEmits>();
defineSlots<CardSlots>();

const ui = computed(() =>
    card({
        size: props.size,
    }),
);
</script>

<template>
    <article :class="ui.base({ class: [props.class, props.ui?.base] })">
        <h2 :class="ui.title({ class: props.ui?.title })">
            <a :href="props.href">
                {{ props.title }}
                <span class="absolute inset-0"></span>
            </a>
        </h2>

        <p :class="ui.description({ class: props.ui?.description })">
            {{ props.description }}
        </p>
    </article>
</template>
