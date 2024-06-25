import ItemSlider from "../components/itemSlider"
import Navbar from "../components/navbar"
import TopRestaurant from "../components/topRestaurant"
import AllRestaurants from "../components/allRestaurants"
import Footer from "../components/footer"
export default function Home(){
    
    return (
        <>
            <Navbar/>
            <ItemSlider/>
            <TopRestaurant/>
            <AllRestaurants />
            <Footer/>
        </>
    )
}