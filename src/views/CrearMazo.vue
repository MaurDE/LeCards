<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Nuevo Mazo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Nuevo Mazo</ion-title>
        </ion-toolbar>
      </ion-header>
        <ion-button  routerlink= '/views/Tab2Page'> </ion-button>
      <ExploreContainer name="Nuevo Mazo" />
    </ion-content>
  </ion-page>

  <ion-list>
    <ion-item>
      <ion-textarea placeholder="Nombre Mazo"></ion-textarea> 
    </ion-item>
  </ion-list>  

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton,IonList,IonTextarea } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  defineComponent({
  name: 'NuevoMazoPage',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton,IonList,IonTextarea}
});
</script>
