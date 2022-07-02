<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>{{title}}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          
        </ion-toolbar>
      </ion-header>
        <ion-card v-if="respuesta==false">
          <ion-card-header>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              <ion-card-title>Card Title</ion-card-title>
          </ion-card-header>
        </ion-card>
        <ion-card v-if="respuesta==true">
          <ion-card-content>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
          </ion-card-content>
        </ion-card>
        <ion-button v-if="respuesta==false" @click="viewRespuesta">
          Mostrar respuesta
        </ion-button>
        <ion-grid v-if="respuesta==true"><ion-col><ion-button>Facil</ion-button></ion-col><ion-col><ion-button>Bueno</ion-button></ion-col><ion-col><ion-button>Dificil</ion-button></ion-col><ion-col><ion-button>Errado</ion-button></ion-col> </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard,IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton,
  },
  setup(){
    var respuesta = false;
    return {respuesta}
  },
  data(){
    var title = this.$route.params
    return {title}
  }, 
  methods: {
      viewRespuesta(){this.respuesta = !this.respuesta},
      funFacil(// tiempocarta = tiempo*2 
      ){
        interface cartaJSON {
                  pregunta: string;
                  contenido: string;
                  mazo: string;
                  tiempo: number;
                }
                var carta : cartaJSON; 
                    carta = JSON.parse("string carta")
                this.carta.tiempo = this.carta.tiempo * 2;
                //store.set("cartas",JSON.stringify(carta))
                 
      },
      funMedio(// tiempo*1.5
      ){
        interface cartaJSON {
                  pregunta: string;
                  contenido: string;
                  mazo: string;
                  tiempo: number;
                }
                var carta : cartaJSON;
                carta = JSON.parse("string carta")
                this.carta.tiempo = this.carta.tiempo * 1.5;
      },
      funDificil(// tiempo * 0.5
      ){
        interface cartaJSON {
                  pregunta: string;
                  contenido: string;
                  mazo: string;
                  tiempo: number;
                }
                var carta : cartaJSON;
                carta = JSON.parse("string carta") 
                this.carta.tiempo = this.carta.tiempo*0.5;
      },
      funErrada(// tiempo * 0.25
      ){
        interface cartaJSON {
                  pregunta: string;
                  contenido: string;
                  mazo: string;
                  tiempo: number;
                }
                var carta : cartaJSON; 
                carta = JSON.parse("string carta")
                this.carta.tiempo = this.carta.tiempo*0.25;
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
