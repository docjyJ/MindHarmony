<template>
  <f7-page name="timeline">
    <f7-navbar title="Timeline"></f7-navbar>
    <f7-block-title>Your timeline</f7-block-title>
    <div class="timeline">
      <div class="timeline-item" v-for="entry in entriesState.dailyEntries">
        <div class="timeline-item-date">{{ entry.date.day }} <small>{{ entry.date.monthShort }}</small></div>
        <div class="timeline-item-divider"></div>
        <div class="timeline-item-content">
            <f7-list media-list strong inset>
              <f7-list-item
                  link="#"
                  :title="entry.date.dayLong"
                  :text="entry.story"
                  after="Voir plus"
              >
                <template #media>
                  <i class="i-material-symbols:sentiment-very-dissatisfied-outline-rounded w-12 h-12"
                     style="color: mediumvioletred !important;" v-if="entry.mood == Rating.EXTREMELY_BAD"/>
                  <i class="i-material-symbols:sentiment-stressed-outline-rounded w-12 h-12"
                     style="color: crimson !important;" v-if="entry.mood == Rating.VERY_BAD"/>
                  <i class="i-material-symbols:sentiment-dissatisfied-outline-rounded w-12 h-12"
                     style="color: darkorange !important;" v-if="entry.mood == Rating.BAD"/>
                  <i class="i-material-symbols:sentiment-neutral-outline-rounded w-12 h-12"
                     style="color: olive !important;" v-if="entry.mood == Rating.NEUTRAL"/>
                  <i class="i-material-symbols:sentiment-satisfied-outline-rounded w-12 h-12"
                     style="color: green !important;" v-if="entry.mood == Rating.GOOD"/>
                  <i class="i-material-symbols:sentiment-calm-outline-rounded w-12 h-12"
                     style="color: darkcyan !important;" v-if="entry.mood == Rating.VERY_GOOD"/>
                  <i class="i-material-symbols:sentiment-very-satisfied-outline-rounded w-12 h-12"
                     style="color: royalblue !important;" v-if="entry.mood == Rating.EXTREMELY_GOOD"/>
                </template>
              </f7-list-item>
            </f7-list>
        </div>
        <!--        <div class="timeline-item-content card no-safe-areas">-->
        <!--          <div class="card-header">{{ entry.date.dayLong }}</div>-->
        <!--          <div class="card-content card-content-padding">Card Content</div>-->
        <!--          <div class="card-footer"> foo</div>-->
        <!--        </div>-->
      </div>
    </div>
  </f7-page>
</template>
<script setup lang="ts">
import {f7Page, f7Navbar, f7BlockTitle, f7List, f7ListItem, f7Card} from 'framework7-vue';
import {useDailyEntries} from "../stores/daily-entries";
import {Rating} from "../types/DailyEntry";

const entriesState = useDailyEntries();
</script>
