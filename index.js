let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon','holaio',"holacom"];
let ext = ['com','us',"io"];

function generateDomainNames(){
    let res = [];

    for(let i = 0; i<pronoun.length; i++){

        for(let x = 0; x<adj.length; x++){

            for(let z = 0; z<noun.length; z++){

                for(let y = 0; y<ext.length; y++){

                    if(noun[z].includes(ext[y], (noun.length-ext[y].length) ) ){
                        
                        let str = noun[z].slice(0,-ext[y].length);
                        res.push(pronoun[i]+adj[x]+str+"."+ext[y]);

                    } else {
                        res.push(pronoun[i]+adj[x]+noun[z]+"."+ext[y]);
                    }
                    
                }
                
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

