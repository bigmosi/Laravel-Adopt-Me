import { div } from 'prelude-ls';
import React, { useState } from 'react';


const searchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");

    return(
        <div className="search-params">
            <h1>{location}</h1>
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" 
                    value={location} 
                    placeholder="Location"
                    onChange={event => setLocation(event.target.value)}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default searchParams;