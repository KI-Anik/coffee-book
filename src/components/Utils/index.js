import toast from "react-hot-toast"

// get all coffees from local storage
const getAllFav = () => {

    const all = localStorage.getItem('fav')
    if (all) {
        const fav = JSON.parse(all)
        return fav
    }
    else {
        return []
    }
}

// add a coffee to local storage 
const addFavourite = coffee => {
    const favourite = getAllFav()
    const isExits = favourite.find(item => item.id == coffee.id)

    if(isExits) return toast.error('already exits')
    favourite.push(coffee)
    localStorage.setItem('fav', JSON.stringify(favourite))
    toast.success('added')
}

// remove a coffee to local storage 

export { addFavourite, getAllFav }