import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export default function Results({ element, artwork }) {
    const { name } = useContext(UserContext);

    return (
        <div>
            <p>
                <strong>{name}</strong>, your character is: {element}
            </p>
            {artwork ? (
                <div className="artwork">
                    <h2>{artwork.data.name}</h2>
                    <img src={artwork.data.imageUrl} alt={artwork.data.name} />
                    {artwork.data.films.length >= 1 ? (
                        <p>{artwork.data.films[0]}</p>
                    ) : (
                        <p>No films found.</p>
                    )}
                </div>
            ) : (
                <p>No artwork found.</p>
            )}
        </div>
    );
}