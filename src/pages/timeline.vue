<template>
  <f7-page name="timeline"><f7-list media-list>
    <f7-list-item
        link="/home/"
        title="Item Title"
        subtitle="Item Subtitle"
        text="Text"
        after="Read more"
        root-start="Root Start"
        root="Root End"
        content-start="Content Start"
        content="Content End"
        media-start="Media Start"
        media="Media"
        after-start="After Start"
        inner-start="Inner Start"
        inner="Inner End"
        before-title="Before Title"
        after-title="After Title"
        header="Header"
        footer="Footer"

    >
    </f7-list-item>
  </f7-list>
    <f7-navbar title="Timeline"></f7-navbar>
    <f7-block-title>Your timeline</f7-block-title>
    <div class="timeline">
      <div class="timeline-item" v-for="journal in journals.entries">
        <div class="timeline-item-date">{{ journal.date.dayOfMonth }} <small>{{
            journal.date.monthShortLocale()
          }}<br/>{{ journal.date.year }}</small></div>
        <div class="timeline-item-divider"></div>
        <div class="timeline-item-content">
          <f7-list media-list strong inset>
            <f7-list-item
                :link="`/entries/${journal.date.year}/${journal.date.month}/${journal.date.dayOfMonth}/`"
                :title="journal.date.weekDayLocale()"
                :text="journal.story"
                after="Voir plus"
            >
              <template #media>
                <rating :rate="journal.rate" :w="12" :h="12"/>
              </template>
              <template #footer>
                <sticker :sticker="sticker" v-for="sticker in journal.stickers"/>
              </template>
            </f7-list-item>
          </f7-list>
        </div>
      </div>
    </div>
  </f7-page>
</template>
<script setup lang="ts">
import {f7Page, f7Navbar, f7BlockTitle, f7List, f7ListItem} from 'framework7-vue';
import Sticker from "@/components/sticker.vue";
import Rating from "@/components/rating.vue";
import {useJournals} from "@/stores/journals";

const journals = useJournals();
</script>x
