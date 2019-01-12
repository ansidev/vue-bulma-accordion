<template>
    <p ref="code">
        <slot/>
    </p>
</template>

<script>
import hljs from "@/hljs";
export default {
    mounted() {
        this.$nextTick(() => {
            hljs.highlightBlock(this.$refs.code);
        });
    }
};
</script>

<style>
</style>
