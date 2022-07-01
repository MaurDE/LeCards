<template>
  <ion-page>
    <div class="flex w-full flex-col overflow-auto">
      <div class="mt-2">
        <h1 class="text-4xl pl-5 font-semibold">Mazos</h1>
      </div>
    </div>

    <div class="flex w-full flex-row flex-wrap justify-around mt-2">
      <ion-card class="w-2/5">
        <router-link :to="{ name: 'MazosView' }">
          <ion-card-header>
            <ion-icon name="albums" color="primary" size="large"></ion-icon>
          </ion-card-header>
          <ion-card-content>
            <ion-card-title class="text-2x1">Mazo1</ion-card-title>
            <ion-card-subtitle>3 Cartas</ion-card-subtitle>
          </ion-card-content>
        </router-link>
      </ion-card>
      <ion-card class="w-2/5">
        <router-link :to="{ name: 'MazosViewa' }">
          <ion-card-header>
            <ion-icon name="albums" color="primary" size="large"></ion-icon>
          </ion-card-header>
          <ion-card-content>
            <ion-card-title>Mazo2</ion-card-title>
            <ion-card-subtitle>2 Cartas</ion-card-subtitle>
          </ion-card-content>
        </router-link>
      </ion-card>
      <ion-card class="w-2/5">
        <router-link :to="{ name: 'MazosViews' }">
          <ion-card-header>
            <ion-icon name="albums" color="primary" size="large"></ion-icon>
          </ion-card-header>
          <ion-card-content>
            <ion-card-title>Mazo3</ion-card-title>
            <ion-card-subtitle>7 Cartas</ion-card-subtitle>
          </ion-card-content>
        </router-link>
      </ion-card>
      <ion-card class="w-2/5">
        <router-link :to="{ name: 'MazosViewd' }">
          <ion-card-header>
            <ion-icon name="albums" color="primary" size="large"></ion-icon>
          </ion-card-header>
          <ion-card-content>
            <ion-card-title>Mazo4</ion-card-title>
            <ion-card-subtitle>5 Cartas</ion-card-subtitle>
          </ion-card-content>
        </router-link>
      </ion-card>
    </div>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonPage,
  IonCard,
  IonCardHeader,
  IonIcon,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";
import { albums } from "ionicons/icons";

export default defineComponent({
  components: {
    IonPage,
    IonCard,
    IonCardHeader,
    IonIcon,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
  },

  setup() {
    return {
      albums,
    };
  },
});
</script>

<style>
</style>