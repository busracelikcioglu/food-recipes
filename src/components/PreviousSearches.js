import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function PreviousSearches(){
    const searches = ['san sebastian', 'profiterol', 'cookie', 'sufle', 'brownie', 'tiramisu', 'magnolia', 'cheesecake'] 

    return (
        <div className="previous-searches section">
            <h2>Önceki Aramalar</h2>
            <div className="previous-searches-container">
                { searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
                    {search}
                </div>)) }
            </div>
            <div className="search-box">
                <input type="text" placeholder="Ara ..." />
                <button className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}