<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
        <ion-button @click="() => push()">
          <ion-icon :icon="arrowBackOutline"></ion-icon>
        </ion-button>
        </ion-buttons>
        <ion-title>Nueva Carta</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>

          <ion-title size="large">Nueva Carta</ion-title>
        </ion-toolbar>
      </ion-header>
    
    <ion-list>
        <ion-input type="text" name="Pregunta" placeholder="Pregunta" v-model="value1"> </ion-input>
        <ion-input type="text" name="Respuesta" placeholder="Respuesta" v-model="value2"> </ion-input>
        <ion-input type="text" name="Nombremazo" placeholder="Mazo" v-model="mazo"> </ion-input>
        <ion-button type="submit" @click="crearCarta() ;  push()" expand="block">  Crear carta    </ion-button>
    </ion-list>

      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { add } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput,IonButtons} from '@ionic/vue';
import { defineComponent,ref as vueRef } from 'vue';

import { useIonRouter } from '@ionic/vue';
import { arrowBackOutline } from "ionicons/icons";
import app from '../firebase'
import { getDatabase, ref, set } from "firebase/database";

export default defineComponent({
  name: 'HomePage',
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
    const router = useIonRouter();
    console.log(app)
    const push = () => {
      router.push('/home');
    };
    const value1 = vueRef('');
      const value2 = vueRef('');
      const mazo = vueRef('');
      return { push,add,value1,value2,mazo,arrowBackOutline };
  },
  methods: {
            crearCarta(){
              var cartaID = 1
                //firebase magic
               const db = getDatabase(); 
               set(ref(db, 'cartas/' + cartaID), {
               frente: this.value1,
               detras: this.value2,
               tiempo: 5
               }); 
               //firebase magic
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
