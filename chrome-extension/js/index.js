import { html, render } from "lighterhtml";
import MiniSearch from "minisearch";
import "webextension-polyfill";
import {formatDistanceToNow} from 'date-fns';

let notesArray = []
const body = window.document.body;
let noteItems = window.document.querySelectorAll('.note-item') || []

function getNotesFromStorage() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get('notes', (data) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(data.notes || []);
            }
        });
    });
}

const search = new MiniSearch({
    fields: ['title', 'content'],
    storeFields: ['title', 'content', 'date']
});

async function showInterface (){
    try {
        notesArray = await getNotesFromStorage();
        if(notesArray.length > 0){
            search.addAll(notesArray);
        }
    } catch (error) {
        console.error('Failed to load notes:', error);
    }


const popup = `
    <div class="w-[1100px] h-[700px] flex gap-8" >
        <div class="w-[50%] overflow-y-scroll  h-full flex-col py-4 px-3 bg-[#e2dabe] rounded-xl custom-scrollbar">
            <div class="flex items-center justify-between">
                <div class="flex gap-1.5"> 
                    <div class="rounded-full w-3 h-3 bg-red-600"></div>
                    <div class="rounded-full w-3 h-3 bg-yellow-600"></div>
                    <div class="rounded-full w-3 h-3 bg-green-600"></div>
                </div>
                
                <div class="flex items-center cursor-pointer"> 
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" id="searchNote"><path fill="#717884" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path></svg>
                    <input id="searchInput" type="text" placeholder="Search notes..." class="text-sm ml-1.5 hidden bg-transparent outline-none border-b border-slate-400 text-slate-700" />
                </div>
            </div>

            <div class="flex justify-between mt-6 items-center">
                <div class="flex gap-3 items-center">
                    <div class="rounded-full w-3 h-3 bg-blue-600"></div>
                    <h2 class="text-xl text-slate-700 font-semibold">Work</h2>
                </div>
                <svg class='cursor-pointer'width="20" height"20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus"><path fill="#717884" d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"></path></svg>
            </div>

            <div id="note-spread" class="flex flex-col gap-7 mt-5">
                ${notesArray.length > 0  || notesArray !== undefined ?  notesArray.map(note => `
                    <div id=${note.id} class="flex px-2 py-2 select-none note-item relative cursor-pointer gap-4 items-center">
                    <p class="text-xs absolute right-1 top-2 text-slate-600">${formatDistanceToNow(new Date(note.id), {suffix: true})}</p>
                    <div class="flex flex-col gap-1.5">
                        <h1 class="text-base text-slate-800 font-semibold">${note.title}</h1>
                        <p class="text-sm leading-5 text-slate-600">${note.content.slice(0, 83)}</p>
                    </div>
                    </div>
                `).join('') : 
                `<div class="flex px-2 py-2 select-none note-item relative cursor-pointer gap-4 items-center">
                    <p class="text-xs absolute right-1 top-2 text-slate-600">May, 10, 2024 at 6:18pm</p>
                    <div class="flex flex-col gap-1.5">
                        <h1 class="text-base text-slate-800 font-semibold">New Note</h1>
                        <p class="text-sm leading-5 text-slate-600">Write here...</p>
                    </div>
                </div>`
            }  
            </div>

        </div>
        <div id="secondPallet" class="w-full relative px-5 py-4 flex-col gap-5 h-full bg-[#e2dabe] rounded-xl">
            <div id="newInterfaceSecondPallet" class="flex flex-col gap-5 w-full items-center justify-center h-full">
                <h1 class="text-base text-slate-800 font-semibold">Select a note to read </h1>
                <p class="text-sm text-slate-600">Nothing is selected</p>
            </div>
            
            <div id="interfaceSecondPallet" class="hidden flex-col">
                <p id='note-date' class="text-sm text-slate-600 mt-4font-medium">May, 10, 2024 at 6:18pm </p>
                <input maxlength="30" placeholder="Title here..." type="text" id="note-title" class="text-3xl placeholder:text-slate-500/90 w-full font-serif bg-transparent outline-none border-none mt-2 text-slate-800 font-semibold" />
                <textarea rows=10 cols=40 placeholder="write here..." type="text" id="note-content" class="text-base w-full resize-none bg-transparent outline-none border-none text-slate-700 leading-9 mt-4"></textarea>

                    <div id="buttons-list" class="flex items-center gap-6 absolute py-2 px-8 rounded-[25px] bottom-3 left-[35%]">
                        <p class="text-base text-slate-100 font-medium cursor-pointer">Aa</p>
                        <svg class="cursor-pointer w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  id="history-alt"><path fill="white" stroke="white" stroke-width="0.4" d="M11.44,2A10,10,0,0,0,4.56,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.06a1,1,0,0,0,0-2H5.66A8,8,0,1,1,11.44,20a1,1,0,1,0,0,2,10,10,0,1,0,0-20Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2h-1V9A1,1,0,0,0,11.44,8Z"></path></svg>

                        <svg class="cursor-pointer w-[20px] h-[20px] scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="history-alt"><path fill="white" stroke="white" stroke-width="0.4" d="M11.44,2A10,10,0,0,0,4.56,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.06a1,1,0,0,0,0-2H5.66A8,8,0,1,1,11.44,20a1,1,0,1,0,0,2,10,10,0,1,0,0-20Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2h-1V9A1,1,0,0,0,11.44,8Z"></path></svg>

                        <div class="relative">
                            <span id="ping-guy" class="animate-ping absolute right-0 -top-1 hidden h-2 w-2 rounded-full bg-red-500 opacity-75"></span>
                            <svg class="cursor-pointer w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="save"><path fill="white" stroke="white" stroke-width="0.4" d="m20.71 9.29-6-6a1 1 0 0 0-.32-.21A1.09 1.09 0 0 0 14 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8a1 1 0 0 0-.29-.71ZM9 5h4v2H9Zm6 14H9v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Zm4-1a1 1 0 0 1-1 1h-1v-3a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v3H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.41l4 4Z"></path></svg>
                        </div>

                        <svg class="cursor-pointer w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  id="trash-alt"><path fill="white" stroke="white" stroke-width="0.4" d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg>
                    </div>
                </div>

        </div>
    </div>
`



function handleClick(e) {
    const newInterfaceSecondPallet = document.getElementById('newInterfaceSecondPallet');
    const interfaceSecondPallet = document.getElementById('interfaceSecondPallet');

    if (interfaceSecondPallet.classList.contains('hidden')){
        newInterfaceSecondPallet.classList.add('hidden');
        interfaceSecondPallet.classList.remove('hidden');
        interfaceSecondPallet.classList.add('flex');
    }

    e.stopPropagation();

    const id = Number(e.currentTarget.id) || e.target.id;
    
    const note = document.getElementById(id);
    const isSelected = note.dataset.selected === 'true';

    const noteTitle = document.getElementById('note-title');
    const noteContent = document.getElementById('note-content');

    // const noteSpread = document.getElementById('note-spread');
    // noteSpread.remove()

    if (isSelected) {
        note.dataset.selected = 'false';
        note.style.backgroundColor = 'transparent';
        note.style.borderRadius = '0';
        noteTitle.value = '';
        noteContent.value = '';
    } else {
        document.querySelectorAll('.note-item').forEach(note => {
            note.dataset.selected = 'false';
            note.style.backgroundColor = 'transparent';
            note.style.borderRadius = '0';
        });
        note.dataset.selected = 'true';
        note.style.backgroundColor = 'rgb(168 161 135)';
        note.style.borderRadius = '10px';

        // This only works for saved data in the storage
        noteTitle.value = notesArray.find(note => note.id === id).title;
        noteContent.value = notesArray.find(note => note.id === id).content;

        // noteTitle.value = note.children[1].children[0].textContent;
        // noteContent.value = note.children[1].children[1].textContent;
    }
  }


  function handleNewNote(noteTitle, noteContent, noteDate, pingGuy) {
    noteTitle.value = '';
            noteContent.value = '';
            noteDate.innerHTML = new Date().toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            })  + ' at ' + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true}).toString().toLocaleLowerCase();
            noteTitle.focus();

            const noteSpread = window.document.getElementById('note-spread');
            const newNote = window.document.createElement('div');

            // newNote.id = 'new-note';
            newNote.id = Date.now();
            newNote.classList.add('flex', 'px-2', 'py-2', 'select-none', 'note-item', 'relative', 'cursor-pointer', 'gap-4', 'items-center');
            newNote.innerHTML = `
                <p id="newNoteDate" class="text-xs absolute right-1 top-2 text-slate-600">
                    ${formatDistanceToNow(new Date(), { addSuffix: true })}
                </p>
                <div class="flex flex-col gap-1.5">
                    <h1 class="text-base text-slate-800 font-semibold">New Note</h1>
                    <p class="text-sm leading-5 text-slate-600">Write here...</p>
                </div>
            `
            for (let i = 0; i < noteItems.length; i++) {
                noteItems[i].dataset.selected = 'false';
                noteItems[i].style.backgroundColor = 'transparent';
                noteItems[i].style.borderRadius = '0';
            }
            newNote.dataset.selected = 'true';
            pingGuy.classList.remove('hidden');
            pingGuy.classList.add('inline-flex');
            noteSpread.insertBefore(newNote, noteSpread.firstChild);

            newNote.addEventListener('click', handleClick);
    }


function handleDeleteNote(id) {
    notesArray = notesArray.filter(note => note.id !== id);
    chrome.storage.sync.set({ notes: notesArray }, () => {
        console.log('Note deleted');
    });
}

function debounce(callback, delay) {
    console.log('i am in debounce')
    let timeout;

    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback.apply(this, arguments);
        }, delay);
    };
}

function saveNote() {
    const noteTitle = document.getElementById('note-title');
    const noteContent = document.getElementById('note-content');
    const noteDate = document.getElementById('note-date');
    const pingGuy = document.getElementById('ping-guy');

    const selectedNote = document.querySelector('.note-item[data-selected="true"]');
    let id;
    selectedNote.id === 'new-note' ? id = Date.now() : id = Number(selectedNote.id);


    console.log(id)

    const updatedNote = {
        id,
        title: noteTitle.value,
        content: noteContent.value,
        date: noteDate.textContent
    };

    const index = notesArray.findIndex(note => note.id === id);
    index !== -1 ? notesArray[index] = updatedNote : notesArray.unshift(updatedNote);

    chrome.storage.sync.set({ notes: notesArray }, () => {
        console.log('Note saved');
    });

    pingGuy.classList.remove('inline-flex');
    pingGuy.classList.add('hidden');
}

const debouncedSaveNote = debounce(saveNote, 1000);

function showInterfaceMain () {
    let mainContainer = window.document.createElement('div');
    mainContainer.id = 'mainContainerJot';
    mainContainer.style.position = 'fixed';
    mainContainer.style.top = '0';
    mainContainer.style.left = '0';
    mainContainer.style.width = '100%';
    mainContainer.style.height = '100%';
    mainContainer.style.zIndex = '1000';
    mainContainer.style.display = 'flex';
    mainContainer.style.justifyContent = 'center';
    mainContainer.style.alignItems = 'center';
    mainContainer.style.backgroundColor = 'transparent';

    if(!window.document.getElementById('mainContainerJot')){
        body.appendChild(mainContainer);
        mainContainer.innerHTML = popup;

        const latestNote = notesArray[0];
        const noteTitle = window.document.getElementById('note-title');
        const noteContent = window.document.getElementById('note-content');
        const noteDate = window.document.getElementById('note-date');
        const pingGuy = window.document.getElementById('ping-guy');
        const saveButton = window.document.getElementById('save');
        const deleteButton = window.document.getElementById('trash-alt');
        const searchButton = window.document.getElementById('searchNote')
        const noteSpread = window.document.getElementById('note-spread');

        const pingGuyInsert = () =>{
            if(pingGuy.classList.contains('inline-flex')){
                return
            }else{
                pingGuy.classList.remove('hidden');
                pingGuy.classList.add('inline-flex');
            }
        }

        const pingGuyRemove = () =>{
            if(pingGuy.classList.contains('hidden')){
                return
            }else{
                pingGuy.classList.remove('inline-flex');
                pingGuy.classList.add('hidden');
            }}

        if(latestNote){
            // if(latestNote.title === 'New Note' && latestNote.content === 'Write here...'){
            //     console.log('there is a new note')
            //     handleNewNote(noteTitle, noteContent, noteDate, pingGuy);
            // }

        }else{
            console.log('there is no new note')
           handleNewNote(noteTitle, noteContent, noteDate, pingGuy);
        }

        noteItems = window.document.querySelectorAll('.note-item')
        if(noteItems){
            const button = window.document.getElementById('buttons-list')
            button.style.backgroundColor = 'rgb(168 161 135)';
            noteItems.forEach(note => {
                note.addEventListener('click', handleClick)
            })
        }


        searchButton.addEventListener('click', () => {
            const searchInput = window.document.getElementById('searchInput');

            if(searchInput.classList.contains('hidden')){
                searchInput.classList.remove('hidden');
                searchInput.focus();
            }
        })

        searchInput.addEventListener('input', (e) => {
            const searchResults = search.search(e.target.value, {prefix: true, fuzzy: 0.2});

            if(searchResults.length === 0) return

            const noteSpread = window.document.getElementById('note-spread');

            noteSpread.innerHTML = searchResults.map(note => `
                <div id=${note.id} class="flex px-2 py-2 select-none note-item relative cursor-pointer gap-4 items-center">
                    <p class="text-xs absolute right-1 top-2 text-slate-600">${formatDistanceToNow(new Date(note.id), {suffix: true})}</p>
                    <div class="flex flex-col gap-1.5">
                        <h1 class="text-base text-slate-800 font-semibold">${note.title}</h1>
                        <p class="text-sm leading-5 text-slate-600">${note.content.slice(0, 83)}</p>
                    </div>
                </div>
            `).join('');

            noteItems = window.document.querySelectorAll('.note-item')
                noteItems.forEach(note => {
                    note.addEventListener('click', handleClick)
                }) 
        })


        deleteButton.addEventListener('click', () => {
            const selectedNote = window.document.querySelector('.note-item[data-selected="true"]');
            if(selectedNote){
                const id = Number(selectedNote.id);
                handleDeleteNote(id);
                selectedNote.remove();
                handleClick(id);
            }else{
                return;
            }
        })


        saveButton.addEventListener('click', () => {
            let newNote;
            for(let i = 0; i < noteItems.length; i++){
                if(noteItems[i].dataset.selected === 'true'){
                    newNote = noteItems[i];
                }else{
                    continue;
                }
            }
            const newNoteTitle = newNote.children[1].children[0].textContent;
            const newNoteContent = newNote.children[1].children[1].textContent;

            if(newNote){
                const newNoteObj = {
                    id: Date.now(),
                    title: newNoteTitle,
                    content: newNoteContent,
                    date: noteDate.textContent
                }

                notesArray.unshift(newNoteObj);
                chrome.storage.sync.set({notes: notesArray}, () => {
                    console.log('A note has been saved')
                })

                // search.addAll(notesArray);
                newNote.id = newNoteObj.id;

                pingGuyRemove();
            }else{
                return;
            }
        })

        const plus = window.document.getElementById('plus');
        plus.addEventListener('click', () => {
            console.log('it has been clicked')
            const newInterfaceSecondPallet = document.getElementById('newInterfaceSecondPallet');
            const interfaceSecondPallet = document.getElementById('interfaceSecondPallet');
        
            if (interfaceSecondPallet.classList.contains('hidden')){
                newInterfaceSecondPallet.classList.add('hidden');
                interfaceSecondPallet.classList.remove('hidden');
                interfaceSecondPallet.classList.add('flex');
            }
            handleNewNote(noteTitle, noteContent, noteDate, pingGuy);            
        })

        
        noteTitle.addEventListener('input', (e) => {
            const newNoteCreate = document.getElementById('new-note');
            if(newNoteCreate){
                newNoteCreate.children[1].children[0].innerHTML = e.target.value;

                pingGuyInsert(); 
            }else{
                noteItems = window.document.querySelectorAll('.note-item')
                for(let i = 0; i < noteItems.length; i++){
                    if(noteItems[i].dataset.selected === 'true'){
                        noteItems[i].children[1].children[0].innerHTML = e.target.value;
                        pingGuyInsert();
                    }
                }
            }
            debouncedSaveNote();
        })

        noteContent.addEventListener('input', (e) => {
            const newNoteCreate = document.getElementById('new-note'); 
            if(newNoteCreate){
                newNoteCreate.children[1].children[1].innerHTML = e.target.value;
                pingGuyInsert();
            }else{
                noteItems = window.document.querySelectorAll('.note-item')
                for(let i = 0; i < noteItems.length; i++){
                    if(noteItems[i].dataset.selected === 'true'){
                        noteItems[i].children[1].children[1].innerHTML = e.target.value;
                        pingGuyInsert();
                    }
                }
            }
            debouncedSaveNote();
        })

    }else{
        console.log('it already exists')
        return;
    }
}
showInterfaceMain();

}


function hideInterface () {
    let mainContainer = window.document.getElementById('mainContainerJot');
    if(mainContainer){
        mainContainer.remove();
    }else{
        return;
    }
}


body.addEventListener('keydown', (e) => {
    if((e.ctrlKey || e.metaKey) && e.key === 'b'){
        showInterface();
    }else if(e.key === 'Escape'){
        hideInterface();
    }
});

