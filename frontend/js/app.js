const API = "http://localhost:5000/api";

async function analyticsVisit(page){

    try{

        await fetch(`${API}/analytics`,{
            method:"GET"
        });

        console.log(`${page} analytics updated`);

    }catch(err){

        console.log(err);

    }

}

window.addEventListener("load",()=>{

    const page = window.location.pathname;

    analyticsVisit(page);

});