import React, { useEffect, useState } from "react";
import ConnectedUsers from "./common/ConnectedUsers";
import "../Sass/NotesComponent.scss";
import { firestore } from "../firebaseConfig";
import { collection, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const NotesComponent = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');

  useEffect(() => {
    const fetchNotes = async () => {
      const notesCollection = collection(firestore, 'notes');
      const snapshot = await getDocs(notesCollection);
      const notesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNotes(notesData);
    };

    fetchNotes();
  }, []);

  const handleAddNote = async () => {
    try {
      const noteRef = await addDoc(collection(firestore, 'notes'), {
        title,
        subject,
        done: false, // Initially set as not done
      });
      setNotes([...notes, { id: noteRef.id, title, subject, done: false }]);
      setTitle('');
      setSubject('');
    } catch (error) {
      console.error('Error adding note: ', error);
    }
  };

  const handleToggleDone = async (id) => {
    const updatedNotes = notes.map(note => {
      if (note.id === id) {
        return { ...note, done: !note.done };
      }
      return note;
    });

    try {
      const noteDoc = doc(firestore, 'notes', id);
      await updateDoc(noteDoc, { done: !notes.find(note => note.id === id).done });
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Error updating note: ', error);
    }
  };

  const handleRemoveNote = async (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);

    try {
      const noteDoc = doc(firestore, 'notes', id);
      await deleteDoc(noteDoc);
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Error removing note: ', error);
    }
  };

  return (
    <div>
      <h2>Notes/To Do</h2>
      <div>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject"></textarea>
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <div>
        {notes.map(note => (
          <div key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.subject}</p>
            <button onClick={() => handleToggleDone(note.id)}>{note.done ? 'Undo' : 'Done'}</button>
            <button onClick={() => handleRemoveNote(note.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesComponent;