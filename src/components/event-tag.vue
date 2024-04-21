<template>
  <f7-chip :text="tag.title" color="neutral">
    <template #media>
      <f7-icon :icon="`i-openmoji:${tag.emoji} w-24px h-24px`"/>
    </template>
  </f7-chip>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
import {f7Chip, f7Icon} from "framework7-vue";
import {Sticker} from "@/types/Sticker";

interface Props {
  tag: Sticker;
}

const {tag} = defineProps<Props>();

</script>
