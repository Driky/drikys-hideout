import { Theme } from "vitepress";
import Layout from "./Layout.vue";

import "./common/styles/vitepress-code-vars.css";
import "./common/styles/app.css";
import "./common/styles/code.css";
import "./common/styles/alerts.css";

import "markdown-it-github-alerts/styles/github-base.css";
import "markdown-it-github-alerts/styles/github-colors-light.css";
import "markdown-it-github-alerts/styles/github-colors-dark-media.css";

export default {
    Layout,
} satisfies Theme;
