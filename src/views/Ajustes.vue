<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ajustes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ajustes</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button  routerlink= '/views/Tab1Page' > Go to Nueva carta</ion-button>
      <ExploreContainer name="Ajustes page" />

    <ion-list>
    <ion-item>
      <ion-label>Activar tiempo limite</ion-label>
      <ion-toggle @ionchange="tiempoActivo=($event.target.value)" value = checked></ion-toggle>
    </ion-item>
    <ion-item v-if="tiempoActivo = true">
      <ion-label>Tiempo limite</ion-label>
      <ion-select interface="action-sheet" :interface-options="options">
        <ion-select-option value="20secs">20 Segundos</ion-select-option>
        <ion-select-option value="25secs">25 Segundos</ion-select-option>
        <ion-select-option value="30secs">30 Segundos</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-label>Cambiar colores</ion-label>
      <ion-select interface="action-sheet" :interface-options="options" @ionchange="color=($event.target.value)">
        <ion-select-option value="clear">Tema Claro</ion-select-option>
        <ion-select-option value="dark">Tema Oscuro</ion-select-option>
      </ion-select>
    </ion-item>

  </ion-list>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonButton,
    IonItem, 
    IonList, 
    IonLabel, 
    IonToggle  } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'AjustesPage',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage,IonButton, 
    IonItem, 
    IonList, 
    IonLabel, 
    IonToggle  }
});

var tiempoActivo = false
var color:string



</script>
