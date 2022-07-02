<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
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
        <ion-button type="submit" @click="() => router.push('/')" expand="block">Crear carta</ion-button>
    </ion-list>

      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { add } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/vue';
import { defineComponent,ref } from 'vue';
import { useRouter } from 'vue-router';
import { Storage } from '@ionic/storage';

const store = new Storage();
var mazos: string;
(async() => {
await store.create(); });
(async() => { mazos = await store.get("mazos")})

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput
  },
  setup() {
    const router = useRouter();
    const value1 = ref('');
      const value2 = ref('');
      const mazo = ref('');
      return { add,router,value1,value2,mazo };
  },
  methods: {
            crearCarta(){
               interface cartaJSON {
                  pregunta: string;
                  contenido: string;
                  mazo: string;
                  tiempo: number;
                }
                var carta : cartaJSON; 
                carta.pregunta = this.value1;
                carta.contenido = this.value2;
                carta.mazo = this.mazo;
                store.set("cartas",JSON.stringify(carta))
                /*var mazoInterface = JSON.parse(mazos);
                  mazoInterface.name.forEach(name => {
                    if (name == this.mazo){
                      mazoInterface.cartas.push(JSON.stringify(carta))
                    }
                  });*/
                  //añadir hashes de cartas a mazos
               //formatear a JSON, añadir a storage
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
