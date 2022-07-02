<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
         <ion-buttons slot="start">
        <ion-button @click="() => router.push( {name: 'Home'})">
          <ion-icon :icon="arrowBackOutline"></ion-icon>
        </ion-button>
        </ion-buttons>
        <ion-title>Nuevo Mazo</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          
          <ion-title size="large">Nuevo Mazo</ion-title>
        </ion-toolbar>
      </ion-header>

    <ion-list>
        <ion-input type="text" name="nombremazo" placeholder="Nombre del mazo" v-model="nombre"> </ion-input>
        <ion-button @click="crearMazo" type="submit" expand="block">Crear mazo</ion-button>
    </ion-list>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { add } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput,IonButtons } from '@ionic/vue';
import { defineComponent,ref } from 'vue';
import { useRouter } from 'vue-router';
import { arrowBackOutline } from "ionicons/icons";
import app from '../firebase'
import { getDatabase, ref as storageRef, set } from "firebase/database";

export default defineComponent({
  name: 'nuevoMazo',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput,IonButtons
  },
  setup() {
    const router = useRouter();
    console.log(app)
    const nombre = ref('')
      return { add, router,nombre,arrowBackOutline };
  },
  methods: {
            crearMazo(){
              var mazoID = this.nombre
                //firebase magic
               const db = getDatabase();
               set(storageRef(db, 'mazos/' + mazoID), {
               nombre: this.nombre
               });
               //firebase magic
               //formatear a JSON, añadir a storage
               this.router.push( {name: 'Home'})
            }
  },
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
