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
    console.log(coffee)
    const favourites = getAllFav()
    const isExits = favourites.find(item => item.id == coffee.id)

    if (isExits) return toast.error('already exits')

    favourites.push(coffee)
    localStorage.setItem('fav', JSON.stringify(favourites))
    toast.success('added')
}

// remove a coffee to local storage 
const removeFav = (id) => {
    const favourites = getAllFav()
    const remaining = favourites.filter(item => item.id != id)
    console.log(favourites, remaining)

    localStorage.setItem('fav', JSON.stringify(remaining))
    toast.success('removed')
}

export { addFavourite, getAllFav, removeFav }