import React from 'react';
import "./SongRow.css";

function SongRow({track}) {
    return (
        <div className="songRow">
             {/* <img src={discover_weekly?.images[0].url} alt=""/> */}
            <img className="songName_album" width="60" height="60" src={track.album.images[0].url} alt="songImg"/>
            <div className="songRow_info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    );
}

export default SongRow;
