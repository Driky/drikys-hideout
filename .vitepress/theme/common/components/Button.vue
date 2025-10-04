<script lang="ts">
import type { VariantProps } from "tailwind-variants";

const button = tv({
  base: "rounded-lg px-6 py-3 font-medium transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]",
  variants: {
    color: {
      primary: "bg-deskfolio-blue text-deskfolio-bg shadow-lg shadow-deskfolio-blue/20 hover:bg-deskfolio-blue-light hover:shadow-xl hover:shadow-deskfolio-blue/30",
      secondary: "bg-deskfolio-bg-lighter text-deskfolio-text border border-deskfolio-bg-lighter hover:border-deskfolio-blue/50 shadow-md hover:shadow-lg hover:bg-deskfolio-bg-light",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type ButtonVariants = VariantProps<typeof button>;

export interface ButtonProps {
  href?: string;
  label: string;
  color?: ButtonVariants["color"];
  class?: any;
  onClick?: () => void;
}
export interface ButtonEmits {}
export interface ButtonSlots {}
</script>

<script lang="ts" setup>
const props = defineProps<ButtonProps>();
defineEmits<ButtonEmits>();
defineSlots<ButtonSlots>();

const ui = computed(() => button({ class: props.class, color: props.color }));
</script>

<template>
  <component
    :is="props.href ? 'a' : 'button'"
    :href="props.href"
    :class="ui"
    @click="props.onClick"
  >
    {{ props.label }}
  </component>
</template>
