<template>
  <f7-chip :text="sticker.title" color="neutral">
    <template #media>
      <span>{{sticker.emoji}}</span>
    </template>
  </f7-chip>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
import {f7Chip, f7Icon} from "framework7-vue";
import {Sticker} from "@/types/Sticker";

const {sticker} = defineProps({
  sticker: {
    type: Object as () => Sticker,
    required: true
  }
});

</script>
