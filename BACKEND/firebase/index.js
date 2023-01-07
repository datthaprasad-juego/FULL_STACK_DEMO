const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  where,
  query,
  doc,
  updateDoc,
  getDoc,
} = require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const findAll = async (table, whereConstraints) => {
  try {
    const collectionModel = collection(db, table);
    const whereCondition = Object.keys(whereConstraints).map((key) => {
      if (key === "new") {
        console.log(
          whereConstraints[key].key,
          whereConstraints[key].op,
          whereConstraints[key].value
        );
        return where(
          whereConstraints[key].key,
          whereConstraints[key].op,
          whereConstraints[key].value
        );
      } else return where(key, "==", whereConstraints[key]);
    });

    const collectionSnapShot = await getDocs(
      query(collectionModel, ...whereCondition)
    );

    return collectionSnapShot.docs.map((doc) => {
      const key = table + "_id";
      return { ...doc.data(), [key]: doc.id };
    });
  } catch (err) {
    console.log("findAll", err);
    return [];
  }
};
const findOne = async (table, whereConstraints) => {
  try {
    const collectionModel = collection(db, table);
    const whereCondition = Object.keys(whereConstraints).map((key) => {
      if (key.new) {
        return where(key.new.key, key.new.op, key.new.value);
      } else return where(key, "==", whereConstraints[key]);
    });

    const collectionSnapShot = await getDocs(
      query(collectionModel, ...whereCondition)
    );

    return collectionSnapShot.docs.map((doc) => {
      const key = table + "_id";
      return { ...doc.data(), [key]: doc.id };
    })[0];
  } catch (err) {
    console.log("findOne", err);
    return;
  }
};

const findOneById = async (table, id) => {
  try {
    const collectionRef = doc(db, table, id);

    const collectionSnapShot = await getDoc(collectionRef);

    const key = table + "_id";
    return { ...collectionSnapShot.data(), [key]: collectionSnapShot.id };
  } catch (err) {
    console.log("findOneById", err);
    return;
  }
};

const insertOne = async (table, data = {}) => {
  try {
    const collectionModel = collection(db, table);
    const doc = await addDoc(collectionModel, data);
    return doc.id;
  } catch (err) {
    console.log("insertOne", err);
    return;
  }
};
const insertMany = async (table, datas = []) => {
  try {
    const collectionModel = collection(db, table);
    await Promise.all(datas.map((data) => addDoc(collectionModel, data)));
    return true;
  } catch (err) {
    console.log("insertMany", err);
    return;
  }
};

const updateOne = async (table, id, updates) => {
  try {
    const collectionRef = doc(db, table, id);
    await updateDoc(collectionRef, updates);
    return true;
  } catch (err) {
    console.log("updateOne", err);
    return;
  }
};

module.exports = {
  findAll,
  findOne,
  insertOne,
  updateOne,
  insertMany,
  findOneById,
};
