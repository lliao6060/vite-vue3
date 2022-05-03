<script setup>
</script>

<template>
  <TAccordions style="max-width: 600px" v-slot="{ activeIdx, toggle }">
    <TAccordion v-for="(num, i) in 3" :key="`accord-${num}`">
      <TAccordionHeader :active="activeIdx === i" @click="toggle(i)">
        Title
      </TAccordionHeader>
      <TAccordionContent :active="activeIdx === i">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exerciation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </TAccordionContent>
    </TAccordion>
  </TAccordions>
</template>

<style>

</style>