<template>
  <f7-chip :text="eventTag.tag.title" color="neutral">
    <template #media>
      <f7-icon md="i-openmoji:globe-showing-europe-africa" />
    </template>
  </f7-chip>
  {{ eventTag.tag}}
</template>

<script setup lang="ts">

import {EventTag} from "../types/EventTag";

interface Props {
  tag: EventTag;
}

const eventTag = defineProps<Props>();

</script>
L
