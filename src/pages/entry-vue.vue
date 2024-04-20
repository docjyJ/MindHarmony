<template>
  <f7-page>
    <f7-navbar :title="entry?.date.fullLocale()" back-link="Back"></f7-navbar>

    <f7-list>
      <f7-list-item title="Mon humeur" smart-select :smart-select-params="{ openIn: 'sheet' }">
        <select>
          <option
              v-for="rating in [Rating.EXTREMELY_BAD, Rating.VERY_BAD, Rating.BAD,  Rating.NEUTRAL, Rating.GOOD, Rating.VERY_GOOD, Rating.EXTREMELY_GOOD]"
              :value="rating" :selected="entry?.mood === rating">
            <rating-icon :mood="rating"/>
            {{ rating }}
          </option>
        </select>
      </f7-list-item>
      <f7-list-input label="Histoire du jour"
                     type="textarea"
                     placeholder="Il était une fois..."
                     readonly
                     outline
                     resizable
                     :value="entry?.story"
      />
      <f7-list-item>
        <event-tag v-for="tag in entry?.tags" :tag="tag"/>
      </f7-list-item>

    </f7-list>


  </f7-page>
</template>
<script setup lang="ts">
import {f7List, f7ListInput, f7ListItem, f7Navbar, f7Page} from "framework7-vue";
import type {Router} from "framework7/types";
import {useDailyEntries} from "@/stores/daily-entries";
import {Rating} from "@/types/DailyEntry";
import RatingIcon from "@/components/rating-icon.vue";
import EventTag from "@/components/event-tag.vue";

interface Props {
  f7route: Router.Route;
  f7router: Router.Router;
}

const {f7route, f7router} = defineProps<Props>();

const entry = useDailyEntries().entryByDate(Number(f7route.params.year), Number(f7route.params.month), Number(f7route.params.day));
</script>
