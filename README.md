# prompt_jot
Prompt Jot is a note-taking application designed to streamline the process of capturing thoughts, ideas, and reminders across multiple platforms. It is perfect for those quick notes and ideas that sparks in when you are browsing and also on your machine.

## Build directory structure

    prompt_jot_repo/
    ├── chrome-extension/
    │   ├── src/
    │   ├── manifest.json
    │   └── ...
    ├── web-app/
    │   ├── pages/
    │   ├── public/
    │   ├── styles/
    │   └── ...
    ├── electron-app/
    │   ├── src/
    │   ├── main.js
    │   └── ...
    ├── .gitignore
    ├── README.md
    └── package.json

 .
    ├── dist-electron
    │   ├── db                                         
    |   │   └── index.js                      # DB connection and methods
    │   ├── main                                         
    |   │   └── index.js                      # Electron-Main
    │   └── preload    
    |   │   └── index.js                      # Preload-Scripts
    └── dist
    |   └── index.html                        # Electron-Renderer(ReactJS build)
.
├── dist-electron
│   ├── db                                         
|   │   └── index.js                      # DB connection and methods
│   ├── main                                         
|   │   └── index.js                      # Electron-Main
│   └── preload    
|   │   └── index.js                      # Preload-Scripts
└── dist
|   └── index.html                        # Electron-Renderer(ReactJS build)