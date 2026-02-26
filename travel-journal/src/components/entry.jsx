export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="mondstadt-image-container">
                <img 
                    className="mondstadt-image" 
                    src={props.entry.img.src}
                    alt={props.entry.img.alt}
                />
            </div>

            <div className= "entry-content">
                <div className = "entry-location">
                    <img 
                        className= "marker" 
                        src="location-pin.png" 
                        alt="marker icon" 
                    />
                    <span className= "country"> {props.entry.country} </span>
                    <a 
                        href={props.entry.googleMapsLink}
                        target="_blank"> View on Google Maps </a>
                </div>
                
                
                <h2 className= "entry-title" > {props.entry.title} </h2>  
                <p className= "entry-dates" > {props.entry.dates}</p>   
                <p className= "entry-text" > {props.entry.text}</p>      
            </div>

        </article>
    )
}