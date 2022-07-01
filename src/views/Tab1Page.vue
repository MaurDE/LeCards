<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Nueva carta</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Nueva carta</ion-title>
        </ion-toolbar>
      </ion-header>
        <ion-button  routerlink= '/views/Tab2Page'> </ion-button>
      <ExploreContainer name="Nueva carta page" />
    </ion-content>
  </ion-page>

  <ion-list>
    <ion-item>
      <ion-textarea placeholder="Contenido de la carta"></ion-textarea> 
    </ion-item>
    <ion-item>
      <ion-textarea placeholder="Respuesta"></ion-textarea> 
    </ion-item> 
    <ion-item>
      <ion-select placeholder="Agregar en:">
        <ion-select-option value="mazo1">mazo1</ion-select-option>
        <ion-select-option value="mazo2">mazo2</ion-select-option>
        <ion-select-option value="mazo3">mazo3</ion-select-option>
      </ion-select> 
    </ion-item>
  </ion-list>  

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton,IonList,IonTextarea,IonSelect} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  defineComponent({
  name: 'Nueva cartaPage',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton,IonList,IonTextarea,IonSelect}
});
</script>
