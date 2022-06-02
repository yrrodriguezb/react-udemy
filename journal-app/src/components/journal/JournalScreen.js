import React from 'react';
// import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';


export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        <NoteScreen />
        {/* <NothingSelected /> */}
      </main>
    </div>
  )
}
