import hljs from "highlight.js/lib/highlight";

import vue from "highlight.js/lib/languages/vue";
hljs.registerLanguage("vue", vue);

import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

export default hljs;
