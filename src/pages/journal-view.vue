<template>
  <f7-page>
    <f7-navbar :title="journal?.date.fullLocale()" back-link="Back"></f7-navbar>

    <f7-list>
      <f7-list-item title="Mon humeur" smart-select :smart-select-params="{ openIn: 'sheet' }">
        <select>
          <option
              v-for="rating in [Rating.EXTREMELY_BAD, Rating.VERY_BAD, Rating.BAD,  Rating.NEUTRAL, Rating.GOOD, Rating.VERY_GOOD, Rating.EXTREMELY_GOOD]"
              :value="rating" :selected="journal?.rate === rating">
            <rating :rate="rating"/>
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
                     :value="journal?.story"
      />
      <f7-list-item>
        <sticker v-for="sticker in journal?.stickers" :sticker="sticker"/>
      </f7-list-item>

    </f7-list>


  </f7-page>
</template>
<script setup lang="ts">
import {f7List, f7ListInput, f7ListItem, f7Navbar, f7Page} from "framework7-vue";
import type {Router} from "framework7/types";
import {useJournals} from "@/stores/journals";
import {Rating} from "@/types/Journal";
import RatingIcon from "@/components/rating.vue";
import Sticker from "@/components/sticker.vue";
import {computed} from "vue";

interface Props {
  f7route: Router.Route;
  f7router: Router.Router;
}

const {f7route: {params : {year, month, day}}} = defineProps<Props>();

const journal = computed(() => useJournals().getJournal(Number(year), Number(month), Number(day)));

</script>
