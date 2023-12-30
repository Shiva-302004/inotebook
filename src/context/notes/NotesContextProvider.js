import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContex";
// import { useState } from "react";

const NotesContextProvider=({children})=>{
    const [note,setnote]=useState([
  {
    "_id": "65900686113e9dc021a0cb03",
    "user": "658fe953ffcac6b035c27653",
    "title": "43",
    "description": "my first notes of my life",
    "tag": "life",
    "date": "1703937670119",
    "__v": 0
  },
  {
    "_id": "659006f2113e9dc021a0cb05",
    "user": "658fe953ffcac6b035c27653",
    "title": "43",
    "description": "my first notes of my life",
    "tag": "life",
    "date": "1703937778011",
    "__v": 0
  },
  {
    "_id": "659006f2113e9dc021a0cb07",
    "user": "658fe953ffcac6b035c27653",
    "title": "43",
    "description": "my first notes of my life",
    "tag": "life",
    "date": "1703937778197",
    "__v": 0
  },
  {
    "_id": "659006f2113e9dc021a0cb09",
    "user": "658fe953ffcac6b035c27653",
    "title": "43",
    "description": "my first notes of my life",
    "tag": "life",
    "date": "1703937778356",
    "__v": 0
  },
  {
    "_id": "659006f2113e9dc021a0cb0b",
    "user": "658fe953ffcac6b035c27653",
    "title": "43",
    "description": "my first notes of my life",
    "tag": "life",
    "date": "1703937778528",
    "__v": 0
  },
  {
    "_id": "659006f2113e9dc021a0cb0d",
    "user": "658fe953ffcac6b035c27653",
    "title": "43",
    "description": "my first notes of my life",
    "tag": "life",
    "date": "1703937778711",
    "__v": 0
  },
  {
    "_id": "659006f2113e9dc021a0cb0f",
    "user": "658fe953ffcac6b035c27653",
    "title": "43",
    "description": "my first notes of my life",
    "tag": "life",
    "date": "1703937778891",
    "__v": 0
  },
  {
    "_id": "659006f3113e9dc021a0cb11",
    "user": "658fe953ffcac6b035c27653",
    "title": "43",
    "description": "my first notes of my life",
    "tag": "life",
    "date": "1703937779060",
    "__v": 0
  },
  {
    "_id": "659006f3113e9dc021a0cb13",
    "user": "658fe953ffcac6b035c27653",
    "title": "43",
    "description": "my first notes of my life",
    "tag": "life",
    "date": "1703937779237",
    "__v": 0
  },
  {
    "_id": "659006f3113e9dc021a0cb15",
    "user": "658fe953ffcac6b035c27653",
    "title": "43",
    "description": "my first notes of my life",
    "tag": "life",
    "date": "1703937779417",
    "__v": 0
  },
  {
    "_id": "659006f3113e9dc021a0cb17",
    "user": "658fe953ffcac6b035c27653",
    "title": "43",
    "description": "my first notes of my life",
    "tag": "life",
    "date": "1703937779593",
    "__v": 0
  },
  {
    "_id": "659006f3113e9dc021a0cb19",
    "user": "658fe953ffcac6b035c27653",
    "title": "43",
    "description": "my first notes of my life",
    "tag": "life",
    "date": "1703937779815",
    "__v": 0
  },
  {
    "_id": "6590108e672293b2cbb3de80",
    "user": "658fe953ffcac6b035c27653",
    "title": "43",
    "description": "my first notes of my life",
    "tag": "life",
    "date": "1703940238332",
    "__v": 0
  },
  {
    "_id": "65901925c80309fc4ef2189b",
    "user": "658fe953ffcac6b035c27653",
    "title": "43",
    "description": "my first notes of my life",
    "tag": "life",
    "date": "1703942437038",
    "__v": 0
  }
])
    return(
        <NoteContext.Provider value={{note,setnote}}>
        {children}
        </NoteContext.Provider>
    )
}

export default NotesContextProvider;