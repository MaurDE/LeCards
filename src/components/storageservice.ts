import { Storage } from '@ionic/storage'

//para pruebas, no usar

export default async function storageFactory(wsBaseUrl: string) {

  const storage = new Storage();
  const storageInstance = await storage.create();


  return {
    install(app: any){
      app.config.globalProperties.$ionicStorage = storageInstance;
      app.config.globalProperties.$store.$ionicStorage = storageInstance; 
    }
  }
}