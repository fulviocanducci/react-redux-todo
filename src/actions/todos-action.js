import { Add_Item } from "../constants"

function AddItem(payload) {
    return {        
        type: Add_Item, 
        payload        
    }
}

export { 
    AddItem
}