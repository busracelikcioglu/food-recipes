import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "San Sebastian",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        }, 
        {
            title: "Profiterol",
            image: "/img/gallery/img_2.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "Cookie",
            image: "/img/gallery/img_3.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Sufle",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        },
        {
            title: "Tiramisu",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
        },
        {
            title: "Magnolia",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        }, 
        {
            title: "Lotus Cheescake",
            image: "/img/gallery/img_7.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "Meyveli Cheescake",
            image: "/img/gallery/img_8.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Lav Kek",
            image: "/img/gallery/img_9.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        },
        {
            title: "Brownie",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
        },
        {
            title: "Rulo Pasta",
            image: "/img/gallery/img_11.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Ekler",
            image: "/img/gallery/img_12.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}