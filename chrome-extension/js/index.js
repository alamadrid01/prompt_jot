import { html, render } from "lighterhtml";
import MiniSearch from "minisearch";
import "webextension-polyfill";



const body = window.document.body;

{/* <div class="flex"> </div> */}

const notes = [
    {
    id: "first-note",
      title: "Meeting with Bob",
      content: `Discuss the project updates and deadlines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec odio nec urna fermentum congue. Nullam nec suscipit neque. Nulla facilisi. Donec ac vestibulum augue, ac tincidunt purus. Donec aliquam, urna in mollis ultricies, turpis sapien lacinia nunc, nec fringilla purus lorem nec metus. Nullam nec suscipit neque. Nulla facilisi. Donec ac vestibulum augue, ac tincidunt purus. Donec aliquam, urna in mollis ultricies, turpis sapien lacinia nunc, nec fringilla purus lorem nec metus.`,
      date: "2024-06-03"
    },
    {
        id: "second-note",
      title: "Grocery Shopping",
      content: `Buy milk, bread, eggs, and cheese. nec odio nec urna fermentum congue. Nullam nec
      suscipit neque. Nulla facilisi. Donec ac
      vestibulum augue, ac tincidunt purus. Donec
      aliquam, urna in mollis ultricies, turpis
      sapien lacinia nunc, nec fringilla purus
      lorem nec metus. Nullam nec suscipit neque.
      Nulla facilisi. Donec ac vestibulum augue, ac
      tincidunt purus. Donec aliquam, urna in mollis
      ultricies, turpis sapien lacinia nunc, nec
      fringilla purus lorem nec metus`,
      date: "2024-06-04"
    },
    {
        id: "third-note",
      title: "Workout Session",
      content: `Morning workout session at the gym. nec odio nec urna fermentum congue. Nullam nec
      suscipit neque. Nulla facilisi. Donec ac
      vestibulum augue, ac tincidunt purus. Donec
      aliquam, urna in mollis ultricies, turpis
      sapien lacinia nunc, nec fringilla purus
      lorem nec metus. Nullam nec suscipit neque.
      Nulla facilisi. Donec ac vestibulum augue, ac
      tincidunt purus. Donec aliquam, urna in mollis
      ultricies, turpis sapien lacinia nunc, nec
      fringilla purus lorem nec metus`,
      date: "2024-06-05"
    },
    {
        id: "fourth-note",
      title: "Dentist Appointment",
      content: `Routine dental check-up at 10 AM.nec odio nec urna fermentum congue. Nullam nec
    suscipit neque. Nulla facilisi. Donec ac
    vestibulum augue, ac tincidunt purus. Donec
    aliquam, urna in mollis ultricies, turpis
    sapien lacinia nunc, nec fringilla purus
    lorem nec metus. Nullam nec suscipit neque.
    Nulla facilisi. Donec ac vestibulum augue, ac
    tincidunt purus. Donec aliquam, urna in mollis
    ultricies, turpis sapien lacinia nunc, nec
    fringilla purus lorem nec metus`,
      date: "2024-06-06"
    },
    {
        id: "fifth-note",
      title: "Read New Book",
      content: `Start reading 'The Great Gatsby'. nec odio nec urna fermentum congue. Nullam nec
      suscipit neque. Nulla facilisi. Donec ac
      vestibulum augue, ac tincidunt purus. Donec
      aliquam, urna in mollis ultricies, turpis
      sapien lacinia nunc, nec fringilla purus
      lorem nec metus. Nullam nec suscipit neque.
      Nulla facilisi. Donec ac vestibulum augue, ac
      tincidunt purus. Donec aliquam, urna in mollis
      ultricies, turpis sapien lacinia nunc, nec
      fringilla purus lorem nec metus`,
      date: "2024-06-07"
    }
  ];

  
const popup = `
    <div class="w-[1100px] h-[700px] flex gap-8" >
        <div class="w-[50%]  h-full flex-col py-4 px-3 bg-[#e2dabe] rounded-xl">
            <div class="flex items-center justify-between">
                <div class="flex gap-1.5"> 
                    <div class="rounded-full w-3 h-3 bg-red-600"></div>
                    <div class="rounded-full w-3 h-3 bg-yellow-600"></div>
                    <div class="rounded-full w-3 h-3 bg-green-600"></div>
                </div>
                <div class="flex cursor-pointer w-5 h-5"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><path fill="#717884" d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path></svg>
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
                ${notes.map(note => `
                    <div id=${note.id} class="flex px-2 py-2 select-none note-item relative cursor-pointer gap-4 items-center">
                    <p class="text-xs absolute right-1 top-2 text-slate-600">${note.date}</p>
                    <div class="flex flex-col gap-1.5">
                        <h1 class="text-base text-slate-800 font-semibold">${note.title}</h1>
                        <p class="text-sm leading-5 text-slate-600">${note.content.slice(0, 75)}</p>
                    </div>
                    </div>
                `).join('')}  
            </div>

        </div>
        <div class="w-full relative px-5 py-4 flex-col gap-5 h-full bg-[#e2dabe] rounded-xl">
            <p class="text-sm text-slate-600 mt-4font-medium">May, 10, 2024 at 6:18pm </p>
            <input placeholder="Title here..." type="text" id="note-title" class="text-3xl placeholder:text-slate-500/90 w-full font-serif bg-transparent outline-none border-none mt-2 text-slate-800 font-semibold" />
            <textarea rows=10 cols=40 placeholder="write here..." type="text" id="note-content" class="text-base w-full resize-none bg-transparent outline-none border-none text-slate-700 leading-9 mt-4"></textarea>

                <div id="buttons-list" class="flex items-center gap-6 absolute py-2 px-8 rounded-[25px] bottom-3 left-[35%]">
                    <p class="text-base text-slate-100 font-medium cursor-pointer">Aa</p>
                    <svg class="cursor-pointer w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  id="history-alt"><path fill="white" stroke="white" stroke-width="0.4" d="M11.44,2A10,10,0,0,0,4.56,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.06a1,1,0,0,0,0-2H5.66A8,8,0,1,1,11.44,20a1,1,0,1,0,0,2,10,10,0,1,0,0-20Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2h-1V9A1,1,0,0,0,11.44,8Z"></path></svg>

                    <svg class="cursor-pointer w-[20px] h-[20px] scale-x-[-1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="history-alt"><path fill="white" stroke="white" stroke-width="0.4" d="M11.44,2A10,10,0,0,0,4.56,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1H8.06a1,1,0,0,0,0-2H5.66A8,8,0,1,1,11.44,20a1,1,0,1,0,0,2,10,10,0,1,0,0-20Zm0,6a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2h-1V9A1,1,0,0,0,11.44,8Z"></path></svg>

                    <svg class="class-pointer w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  id="trash-alt"><path fill="white" stroke="white" stroke-width="0.4" d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg>
                </div>

        </div>
    </div>
`

function handleclick(e) {
    e.stopPropagation();
    const id = e.currentTarget.id
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
        note.dataset.selected = 'true';
        note.style.backgroundColor = 'rgb(168 161 135)';
        note.style.borderRadius = '10px';
        noteTitle.value = notes.find(note => note.id === id).title;
        noteContent.value = notes.find(note => note.id === id).content;
    }
  }


function showInterface () {
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

        const latestNote = notes[0];
        const noteTitle = window.document.getElementById('note-title');
        const noteContent = window.document.getElementById('note-content');

        noteTitle.value = latestNote.title;
        noteContent.value = latestNote.content;

        const noteItems = window.document.querySelectorAll('.note-item')
        if(noteItems){
            const button = window.document.getElementById('buttons-list')
            console.log('this is the button', button)
            button.style.backgroundColor = 'rgb(168 161 135)';
            noteItems.forEach(note => {
                note.addEventListener('click', handleclick)
            })
        }
    }else{
        console.log('it already exists')
        return;
    }
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

