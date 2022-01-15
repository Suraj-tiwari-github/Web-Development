const list=['List'];
let choice = prompt("Enter a command: ");
 let count = 0;
while(choice!=='quit' && choice!=='quit'){
    if(choice==='new' && choice!=='quit'){
        let newItem=prompt("Enter a TODO Item")
        if(newItem!=='quit' && newItem!=="delete" && newItem!=='list'){
        list[count++]=newItem;
        choice=prompt("Item added to the list, Enter a command");
        }
        else{
            choice=newItem;
        }
    }

    else if(choice==='list' && choice!=='quit'){
        console.log('*********')
        for(let i=0; i<list.length; i++){
            //* String template literal.
            console.log(`${i}: ${list[i]}`);
        }
        console.log('*********')
        choice='';
    }

    else if(choice==='delete' && choice!=='quit'){
        let del=parseInt(prompt("Enter the index to delete the item:"));
        if(del>=0){
             list.splice(del,1);
            console.log("Item deleted from the list");
            console.log("*********");
            for (let i = 0; i < list.length; i++) {
              console.log(`${i}: ${list[i]}`);
            }
            console.log("*********");
            choice='';
        }
        else{
            
        }
    }

    else if(choice==='quit'){
        console.log("Ok, You quit the app")
        break;
    }
    else{
        choice=prompt("Please enter a valid Command ");
    }
}

console.log("Ok, you quit the app")