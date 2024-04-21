<template>
  <f7-page name="timeline">
    <f7-navbar title="Timeline"></f7-navbar>
    <f7-block-title>Your timeline</f7-block-title>
    <div class="timeline">
      <div class="timeline-item" v-for="entry in entriesState.dailyEntries">
        <div class="timeline-item-date">{{ entry.date.dayOfMonth }} <small>{{ entry.date.monthShortLocale() }}<br/>{{ entry.date.year }}</small></div>
        <div class="timeline-item-divider"></div>
        <div class="timeline-item-content">
            <f7-list media-list strong inset>
              <f7-list-item
                  :link="`/entries/${entry.date.year}/${entry.date.month}/${entry.date.dayOfMonth}/`"
                  :title="entry.date.weekDayLocale()"
                  :text="entry.story"
                  after="Voir plus"
              >
                <template #media>
                  <rating-icon :mood="entry.rate" :w="12" :h="12"/>
                </template>
              </f7-list-item>
            </f7-list>
          <event-tag :tag="tag" v-for="tag in entry.stickers"/>
        </div>
      </div>
    </div>
  </f7-page>
</template>
<script setup lang="ts">
import {f7Page, f7Navbar, f7BlockTitle, f7List, f7ListItem} from 'framework7-vue';
import {useJournals} from "@/stores/journals";
import EventTag from "@/components/event-tag.vue";
import RatingIcon from "@/components/rating-icon.vue";

const entriesState = useJournals();
</script>
