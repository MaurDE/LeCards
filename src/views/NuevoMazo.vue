<template>
  <ion-page>
    <ion-header :translucent="true">
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

    <ion-list>
        <ion-input type="text" name="nombremazo" placeholder="Nombre del mazo" v-model="nombre"> </ion-input>
        <ion-button @click="() => router.push('/')" type="submit" expand="block">Crear mazo</ion-button>
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

(async() => {
    await store.create();
});
export default defineComponent({
  name: 'nuevoMazo',
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
    const nombre = ref('')
      return { add, router,nombre };
  },
  methods: {
            crearMazo(){
              interface mazoJSON {
              name: string[];
              cartas:string[];
              } 
              var mazo:mazoJSON;

                mazo.name.push = this.value;
                store.set("mazos",JSON.stringify(mazo))
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
