<template>
  <f7-app v-bind="f7params">
    <!-- Left panel with cover effect-->
    <f7-panel left cover dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Left Panel"></f7-navbar>
          <f7-block>Left panel content goes here</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Right panel with reveal effect-->
    <f7-panel right reveal dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Right Panel"></f7-navbar>
          <f7-block>Right panel content goes here</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Views/Tabs container -->
    <f7-views tabs class="safe-areas">
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar tabbar icons bottom>
        <f7-link
            tab-link="#view-home"
            tab-link-active
            text="Home"
            icon="i-material-symbols-home-outline?bg"
        />
        <f7-link
            tab-link="#view-about"
            text="About"
            icon="i-material-symbols-person-outline?bg"
        />
        <f7-link
            tab-link="#view-timeline"
            text="Timeline"
            icon="i-material-symbols-calendar-view-day-outline?bg"
        />
        <f7-link
            tab-link="#view-settings"
            text="Settings"
            icon="i-material-symbols-settings-outline?bg"
        />
      </f7-toolbar>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <f7-view id="view-home" main tab tab-active url="/"></f7-view>

      <!-- About View -->
      <f7-view id="view-about" name="about" tab url="/about/"></f7-view>

      <!-- Timeline View -->
      <f7-view id="view-timeline" name="timeline" tab url="/timeline/"></f7-view>

      <!-- Settings View -->
      <f7-view id="view-settings" name="settings" tab url="/settings/"></f7-view>
    </f7-views>

    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Popup content goes here.</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <f7-login-screen id="my-login-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Login</f7-login-screen-title>
          <f7-list form>
            <f7-list-input
                type="text"
                name="username"
                placeholder="Your username"
                v-model:value="username"
            ></f7-list-input>
            <f7-list-input
                type="password"
                name="password"
                placeholder="Your password"
                v-model:value="password"
            ></f7-list-input>
          </f7-list>
          <f7-list>
            <f7-list-button
                title="Sign In"
                @click="alertLoginData"
            ></f7-list-button>
            <f7-block-footer>
              Some text about login information.<br/>Click "Sign In" to close
              Login Screen
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
  </f7-app>
</template>
<script setup lang="ts">
import {ref, onMounted} from "vue";
import {
  f7,
  f7ready,
  f7App,
  f7Page,
  f7View,
  f7Panel,
  f7Block,
  f7BlockFooter,
  f7List,
  f7LoginScreen,
  f7LoginScreenTitle,
  f7Link,
  f7Navbar,
  f7NavRight,
  f7Toolbar,
  f7Views,
  f7Popup,
  f7ListInput,
  f7ListButton,
} from "framework7-vue";
import {getDevice} from "framework7/lite-bundle";
import capacitorApp from "./capacitor-app";
import routes from "./routes/router";
import {testData} from "./types/DataTest";
import {useJournals} from "./stores/journals";
import {JsonToModels} from "@/types/ParserV1";

const model = JsonToModels(testData);


const journals = useJournals();

journals.stickers = model.stickers;
journals.entries = model.journals.sort((a, b) => b.date.valueOf() - a.date.valueOf());


const device = getDevice();
// Framework7 Parameters
const f7params = {
  name: "Mind Harmony", // App name
  theme: "auto", // Automatic theme detection
  id: "fr.docjyj.mindHarmony", // App bundle ID
  // App routes
  routes: routes,

  // Input settings
  input: {
    scrollIntoViewOnFocus: device.capacitor,
    scrollIntoViewCentered: device.capacitor,
  },
  // Capacitor Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
};
// Login screen data
const username = ref("");
const password = ref("");

const alertLoginData = () => {
  f7.dialog.alert(
      "Username: " + username.value + "<br>Password: " + password.value,
      () => {
        f7.loginScreen.close();
      }
  );
};
onMounted(() => {
  f7ready(() => {
    // Init capacitor APIs (see capacitor-app.js)
    if (device.capacitor) {
      capacitorApp.init(f7);
    }
    // Call F7 APIs here
  });
});
</script>
