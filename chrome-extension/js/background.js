import "webextension-polyfill";


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request.message)

    if(request.message === "getNotes") {
        console.log('received the message')
        chrome.storage.sync.get('notes', (data) => {
            console.log('this is the data from the storage', data.notes)

        
            if(data.notes){
                sendResponse({notes: "hello world"})
            }else{
                notesArray = []
                sendResponse({notes: []})
            }
        })
    }})