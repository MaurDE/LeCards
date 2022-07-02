<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
        <ion-button @click="() => router.push( {name: 'Home'})">
          <ion-icon :icon="arrowBackOutline"></ion-icon>
        </ion-button>
        </ion-buttons>
        <ion-title>Ajustes</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ajustes</ion-title>
        </ion-toolbar>
      </ion-header>
    
    <ion-list>
        <ion-item>
            <ion-label>Activar tiempo limte</ion-label>
            <ion-toggle slot="end" @ionChange="activarTiempo" :checked="tiempolimite"  ></ion-toggle>
        </ion-item>
        <ion-radio-group v-if="tiempolimite" value="20s" @ionChange="cambiarTiempo">
            <ion-label>20 segundos</ion-label>
            <ion-radio name="20s" value="20s" slot="end"></ion-radio>
            <ion-label>25 segundos</ion-label>
            <ion-radio name="25s" value="25s" slot="end"></ion-radio>
            <ion-label>30 segundos</ion-label>
            <ion-radio name="30s" value="30s " slot="end"></ion-radio>
        </ion-radio-group>
        
  </ion-list>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonItem, IonRadio,IonRadioGroup } from '@ionic/vue';
import { defineComponent, ref } from "vue";
import { useRouter } from 'vue-router';
import { arrowBackOutline } from "ionicons/icons";
import app from '../firebase'
import { getDatabase, ref as storageRef, set } from "firebase/database";

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonToggle,
    IonItem, 
    IonRadio,
    IonRadioGroup
  },
  setup() {
    const router = useRouter();
    const tiempolimite = ref(false);
    return {tiempolimite,router, arrowBackOutline};
  },
  data() {
      return {
        color: '',
        tiempo: '',
      };
    },
  methods: {
      activarTiempo(){
        this.tiempolimite = !this.tiempolimite
        const db = getDatabase();
               set(storageRef(db, 'ajustes/' + 'ajusteID'), {
               tiempoActivado: this.tiempolimite,
               });
      },
      cambiarTiempo({ detail }){
        this.lastEmittedValue = detail.value
        console.log(this.lastEmittedValue)
        //firebase magic
               const db = getDatabase();
               set(storageRef(db, 'ajustes/' + 'ajusteID'), {
               tiempoActivado: this.tiempolimite,
               tiempo: this.lastEmittedValue
               });
               //firebase magic
               //formatear a JSON, añadir a storage
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
