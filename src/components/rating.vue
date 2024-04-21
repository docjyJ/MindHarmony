<template>
  <f7-icon v-if="Rating.EXTREMELY_BAD == rate" icon="i-material-symbols:sentiment-very-dissatisfied w-12 h-12 text-pink-6"/>
  <f7-icon v-else-if="Rating.VERY_BAD == rate" icon="i-material-symbols:sentiment-stressed w-12 h-12 text-red-6"/>
  <f7-icon v-else-if="Rating.BAD == rate" icon="i-material-symbols:sentiment-dissatisfied w-12 h-12 text-amber-6"/>
  <f7-icon v-else-if="Rating.NEUTRAL == rate" icon="i-material-symbols:sentiment-neutral w-12 h-12 text-lime-6"/>
  <f7-icon v-else-if="Rating.GOOD == rate" icon="i-material-symbols:sentiment-satisfied w-12 h-12 text-emerald-6"/>
  <f7-icon v-else-if="Rating.VERY_GOOD == rate" icon="i-material-symbols:sentiment-calm w-12 h-12 text-cyan-6"/>
  <f7-icon v-else-if="Rating.EXTREMELY_GOOD == rate" icon="i-material-symbols:sentiment-very-satisfied w-12 h-12 text-sky-6"/>
</template>
<!-- TODO compute tags -->
<script setup lang="ts">
import {defineProps} from 'vue';
import {f7Icon} from "framework7-vue";
import {Rating} from "@/types/Journal";

const {rate} = defineProps({
  rate: {
    type: Number as () => Rating,
    required: true
  }
});
</script>
