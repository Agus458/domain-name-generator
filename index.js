let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

function generateDomainNames(){
    let res = [];

    for(let i = 0; i<pronoun.length; i++){

        for(let x = 0; x<adj.length; x++){

            for(let z = 0; z<noun.length; z++){

                res.push(pronoun[i]+adj[x]+noun[z]);

            }

        }

    }

    return res;
}



    let lista = document.querySelector("#lista");
    
    let res = generateDomainNames();

    for(let i = 0; i<res.length; i++){
        let li = document.createElement("li");
        li.innerHTML = res[i];
        lista.appendChild(li);
    }    

