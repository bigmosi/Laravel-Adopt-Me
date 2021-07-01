import { div } from 'prelude-ls';
import React, { useState, useEffect } from 'react';
import Pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from './useDropdown';


const searchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

    useEffect(() => {
        setBreeds([]);
        setBreed("");

        Pet.breeds(animal).then(({ breeds }) => {
            const breedStrings = breeds.map(({ name }) => name);
            setBreeds(breedStrings);
        }, console.error);
    },[animal, setBreed, setBreeds]);

    return(
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" 
                    value={location} 
                    placeholder="Location"
                    onChange={event => setLocation(event.target.value)}
                    />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default searchParams;