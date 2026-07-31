const routes = {
    tavis: "tavis.html",
    daastaan: "daastaan.html",
    parampara: "parampara.html"
};

const keywords = {
    tavis: [
        "safe","danger","danger zone","crime","police","hospital","ambulance",
        "emergency","sos","security","red zone","location","tracking"
    ],

    daastaan: [
        "history","historical","fort","monument","museum","taj","temple",
        "palace","who built","when built","story"
    ],

    parampara: [
        "food","culture","festival","dress","shopping","market","tradition",
        "handicraft","local","art","dance"
    ]
};

const input = document.getElementById("globalSearch");
const button = document.getElementById("searchBtn");

function searchApp(){

    if(!input) return;

    const q=input.value.toLowerCase().trim();

    if(q==="") return;

    for(const word of keywords.tavis){

        if(q.includes(word)){
            window.location=routes.tavis;
            return;
        }

    }

    for(const word of keywords.daastaan){

        if(q.includes(word)){
            window.location=routes.daastaan;
            return;
        }

    }

    for(const word of keywords.parampara){

        if(q.includes(word)){
            window.location=routes.parampara;
            return;
        }

    }

    alert("AI Search Coming Soon");
}

button?.addEventListener("click",searchApp);

input?.addEventListener("keypress",e=>{

if(e.key==="Enter"){

searchApp();

}

});

console.log("Heritage Guard Ready 🚀");