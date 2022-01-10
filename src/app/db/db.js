import Dexie from 'dexie';

const db = new Dexie('reactStoreLr');

//esquema
db.version(1).stores({
  cart: '++id, productId, title, price, category'
});

export default db;