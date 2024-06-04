import { html, render } from "lighterhtml";
import MiniSearch from "minisearch";
import "webextension-polyfill";



const body = window.document.body;

{/* <div class="flex"> </div> */}

const notes = [
    {
    id: "first-note",
      title: "Meeting with Bob",
      content: `Discuss the project updates and deadlines. nec odio nec urna fermentum congue. Nullam nec
      suscipit neque. Nulla facilisi. Donec ac
      vestibulum augue, ac tincidunt purus. Donec
      aliquam, urna in mollis ultricies, turpis
      sapien lacinia nunc, nec fringilla purus
      lorem nec metus. Nullam nec suscipit neque.
      Nulla facilisi. Donec ac vestibulum augue, ac
      tincidunt purus. Donec aliquam, urna in mollis
      ultricies, turpis sapien lacinia nunc, nec
      fringilla purus lorem nec metus`,
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
    <div class="w-[1000px] h-[700px] flex gap-8" >
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

            <div class="flex mt-6 gap-3 items-center">
                <div class="rounded-full w-3 h-3 bg-blue-600"></div>
                <h2 class="text-xl text-slate-700 font-semibold">Work</h2>
            </div>

            <div class="flex flex-col gap-7 mt-5">
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
        <div class="w-full px-5 py-4 flex-col gap-5 h-full bg-[#e2dabe] rounded-xl">
            <p class="text-sm text-slate-600 mt-4font-medium">May, 10, 2024 at 6:18pm </p>
            <h1 class="text-3xl font-serif mt-2 text-slate-800 font-semibold">Meeting with the team</h1>
            <p class="text-base text-slate-700 leading-9 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                nec odio nec urna fermentum congue. Nullam nec
                suscipit neque. Nulla facilisi. Donec ac
                vestibulum augue, ac tincidunt purus. Donec
                aliquam, urna in mollis ultricies, turpis
                sapien lacinia nunc, nec fringilla purus
                lorem nec metus. Nullam nec suscipit neque.
                Nulla facilisi. Donec ac vestibulum augue, ac
                tincidunt purus. Donec aliquam, urna in mollis
                ultricies, turpis sapien lacinia nunc, nec
                fringilla purus lorem nec metus.</p>

        </div>
    </div>
`

function handleclick(e) {
    e.stopPropagation();
    const id = e.currentTarget.id
    const note = document.getElementById(id);
    const isSelected = note.dataset.selected === 'true';

    if (isSelected) {
        note.dataset.selected = 'false';
        note.style.backgroundColor = 'transparent';
        note.style.borderRadius = '0';
    } else {
        note.dataset.selected = 'true';
        note.style.backgroundColor = 'rgb(168 161 135)';
        note.style.borderRadius = '10px';
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
        const noteItems = window.document.querySelectorAll('.note-item')
        if(noteItems){
            // console.log('it exists', noteItems)
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

