<template>
  <ion-page>

      <div class="mt-2">
          <h2 class="text-center text-2xl font-semibold">NewTask</h2>
      </div>

       <!--<Form @submit="addTask()" class="flex flex-col justify-center h-full">-->

           <div>
               <ion-item>
                   <Field v-slot="{ field }" name="titleField" 
                    v-model="title"> 
                       <ion-input v-bind="field" type="text" name="titleField"
                       placeholder="Card title"></ion-input>
                   </Field>    
               </ion-item>

               <ion-item lines="none">

                   <ErrorMessage v-slot="{message}" name="titleField">
                       <ion-text color="danger" v-if="message">{{message}}</ion-text>
                   </ErrorMessage>
               </ion-item>
           </div>
                <ion-item>
                   <Field v-slot="{ field }" name="contentField" 
                    v-model="content"> 
                       <ion-input v-bind="field" type="text" name="contentField"
                       placeholder="Card content"></ion-input>
                   </Field>    
               </ion-item>

               <ion-item lines="none">

                   <ErrorMessage v-slot="{message}" name="contentField">
                       <ion-text color="danger" v-if="message">{{message}}</ion-text>
                   </ErrorMessage>
               </ion-item>
           <div>
               
           </div>

           <div class="mt-8">
               <ion-button expand="block" type="submit">Create</ion-button>
           </div>
       <!-- </Form> -->


      <ion-fab vertical="top" horizontal="end" slot="fixed"
        class="cursor-pointer" @click="$emit('close-modal')">
          <ion-icon :icon="close" class="text-3xl"></ion-icon>
      </ion-fab>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IonPage,IonFab,IonIcon,IonItem,IonInput,IonText,IonDatetime,IonTextarea,
IonLabel, IonButton, IonSelect,IonSelectOption } from '@ionic/vue';
import {close,document,grid} from 'ionicons/icons';
import {db} from '../firebase';
export default defineComponent({
    components:{
        IonPage,IonFab,IonIcon,IonItem,IonInput,IonText,IonDatetime,IonTextarea,
        IonLabel,IonButton,IonSelect,IonSelectOption,
    },
    setup(){
        const title = ref('');
        const content = ref('');
        /*function addCard() {
            
            db.('cards')
              .add({
                  title: title.value,
                  content: content.value,
                  done: false
              }) 
              .then(() => {
                  title.value = "";
                  content.value = "";
                  this.$emit('close-modal');
                  console.log('Document successfully written !');
              })
              .catch((error) => {
                  console.log("Error writing document: ",error);
              }) 
        }*/
        return{
           title,content,
            close,document,grid
        }
    }
})
</script>

<style>
</style>