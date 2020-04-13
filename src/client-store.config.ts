
import * as localforage from 'localforage';


export const clientStoreConfig = {
    name: 'template',
    StoreName: 'clientStore',
    driver: [
        localforage.INDEXEDDB,
        localforage.WEBSQL,
        localforage.LOCALSTORAGE
    ],
    version: 2,
    description: 'client db'
}