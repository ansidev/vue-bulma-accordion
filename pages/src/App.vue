<template>
  <div id="app">
      <div class="columns is-centered">
          <div class="column is-half box">
              <p class="title is-2">
                  Vue Bulma Accordion
              </p>

              <p>A simple, easily configurable accordion or collapsible for Vue, styled with Bulma.</p>

              <BulmaAccordion>
                    <BulmaAccordionItem>
                        <h4 slot="title">Just a title</h4>
                    </BulmaAccordionItem>
                    <BulmaAccordionItem>
                        <h4 slot="title">A title with content</h4>
                        <p slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eos illo expedita asperiores rem iure aliquid dolore, pariatur dignissimos, minima inventore? Minima voluptatum nulla, error omnis laboriosam voluptatibus rem aperiam.</p>
                    </BulmaAccordionItem>
                    <BulmaAccordionItem>
                        <h4 slot="title">All of it</h4>
                        <p slot="content">boo</p>
                        <button class="button is-primary" slot="footer">Click Me!</button>
                    </BulmaAccordionItem>
                </BulmaAccordion>
          </div>
      </div>
  </div>
</template>

<script>
import { BulmaAccordion, BulmaAccordionItem } from "vue-bulma-accordion";
export default {
    name: "app",
    components: { BulmaAccordion, BulmaAccordionItem }
};
</script>

<style lang="scss">
@import "~@/assets/main.scss";
#app {
    padding-top: 2em;
}
</style>
