
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getFirestore, onSnapshot, query } from "firebase/firestore";
import type { Post } from "./types";
import firebase from "firebase/compat/app";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// here the api keys are public by design, every client se a public key, then security rules server side restricts access
const firebaseConfig = {
    
        apiKey: "AIzaSyCrBoafqxEeRVgOHumiE41Gz3eciPjn_Us",
        authDomain: "oct3rdworkshgop.firebaseapp.com",
        projectId: "oct3rdworkshgop",
        storageBucket: "oct3rdworkshgop.appspot.com",
        messagingSenderId: "225845044072",
        appId: "1:225845044072:web:cd28ae82925ce4ec872cdd"
      

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// TODO get the default database when app starts (free plan only gets one db)
const db = getFirestore(app)

export async function newPost(userName: string, content: string) {
    // TODO add a new post to a "posts" collection via the addDoc function

    addDoc(collection(db, "posts"), {
        userName:userName,
        content:content,
        likes: 0
    });
}


export async function addLike(postid: string, userName: string) {
    // functions like doc and collection takes any number of string args as the path to doc or collection
    // increment is a kind of special function in the value field to represent an action on the db
    // TODO use updateDoc and increment() to increase vote by 1


    // also add a record to track which posts the current user liked already
    // when merge is true, setDoc acts like updateDoc, but also creates the doc if it doenst exist yet.
    // arrayUnion() adds postid to the array, but do nothing if its already in.

    // TODO use setDoc with option merge:true, and arrayUnion() to update a list of postids the username liked.
}


export async function removeLike(postid: string, userName: string) {
    // TODO see addLike(), but decrease votes instead.
}


export async function onPostChange(onChange: (changes: Post[]) => void) {

    // TODO use onSnapshot function to setup a callback function that is called whenever the collection of posts changes
    // then, for each change, convert each of them to a Post obj,
    // then, collect each post, and give it to frontend via the onChange() function provided.

    // note that onSnapshot trigger immediately when the app starts (and if app goes offline and back online later)
    // so that this is useful for the initial fetch as well!

    onSnapshot(query(collection(db, "posts")), (snapshot)=>{
        
        const posts : Post[] = [];
        snapshot.docChanges().forEach(postDoc=>{
            const postObj = postDoc.doc.data();
            postObj["id"] = postDoc.doc.id;
            posts.push(postObj as Post);
        })

        onChange(posts);
    })

}

export async function getUserLikes(userName: string) {

    // TODO write a function to get each liked post of the given username
    // note remember to return an empty list if the doc don't exists yet.
}