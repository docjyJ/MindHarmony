<template>
  <i :class="iconClass" :style="{ color: iconColor}"/>
</template>

<script setup lang="ts">
import {Rating} from "../types/DailyEntry";
import {computed} from "vue";

const props = defineProps({
  mood: {
    type: Number as () => Rating,
    required: true
  },
  rounded: {
    type: Boolean,
    default: true
  },
  w: {
    type: Number,
    default: 12
  },
  h: {
    type: Number,
    default: 12
  }
});

const settings = {
  iconLib: 'i-material-symbols',
  iconParm: {
    [Rating.EXTREMELY_BAD]: {color: 'mediumvioletred', iconClass: "sentiment-very-dissatisfied"},
    [Rating.VERY_BAD]: {color: 'crimson', iconClass: "sentiment-stressed"},
    [Rating.BAD]: {color: 'darkorange', iconClass: "sentiment-dissatisfied"},
    [Rating.NEUTRAL]: {color: 'olive', iconClass: "sentiment-neutral"},
    [Rating.GOOD]: {color: 'green', iconClass: "sentiment-satisfied"},
    [Rating.VERY_GOOD]: {color: 'darkcyan', iconClass: "sentiment-calm"},
    [Rating.EXTREMELY_GOOD]: {color: 'royalblue', iconClass: "sentiment-very-satisfied"}
  }
};

const iconClass = computed(() => {
  const iconType = props.rounded || props.rounded === undefined ? 'outline-rounded' : 'fill';
  const iconSize = `w-${props.w || 12} h-${props.h || 12}`;
  const iconClass = settings.iconParm[props.mood].iconClass;
  return `${settings.iconLib}:${iconClass}-${iconType} ${iconSize}`;
});

const iconColor = computed(() => `${settings.iconParm[props.mood].color} !important`);
</script>
