<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>LeCards
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">LeCards</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-fab vertical="bottom" horizontal="start" slot="fixed">
        <ion-fab-button @click="() => router.push('/NuevoMazo')">
          <ion-icon :icon="add">Nuevo mazo</ion-icon>
        </ion-fab-button>
      </ion-fab>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="() => router.push('/NuevaCarta')">
          <ion-icon :icon="add">Nueva carta</ion-icon>
        </ion-fab-button>
      </ion-fab>
      <ion-list v-if="mazos3">
        <ion-item v-for="mazo in mazos2" :key="mazo.id" @click="() => router.push( {name: 'Repaso', params: { data: mazo.name}})">
          {{ mazo.name }}
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
<!--#####################################################################################################################################-->
  <!--<router-link: to = "{name:'Home', params: {id: item}}" 
  v-for="(item,index) of NombreMazos" : key="index">
  <a>{{item}}</a>
  <br>
  </router-link>  -->
<!--#####################################################################################################################################-->
<script lang="ts">
import { add } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonFabButton, IonFab, IonIcon } from '@ionic/vue';
import { defineComponent,ref } from 'vue';
import { useRouter } from 'vue-router';
import { Storage } from '@ionic/storage';

const store = new Storage();
(async () => { await store.create(); })
var mazos: string;
//(async () => { mazos = await store.get("mazos") })

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonFabButton,
    IonFab,
    IonIcon
  },
  setup() {
    const router = useRouter();
    //var mazos2 = JSON.parse(mazos);
    //if(mazos2 == null){
      var mazos2 = 
        ref([
        { id: 0, name: 'Item 0' },
        { id: 1, name: 'Item 1' },
      ]);
      //}
    return { add, router, mazos2 };

  },
  data() {
    var mazos3 = this.mazos2
    return {mazos3}
  },
  //created() {
  //this.$api.getAll()
   //   .then(res => this.mazos4 = res.data)
  //}
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
