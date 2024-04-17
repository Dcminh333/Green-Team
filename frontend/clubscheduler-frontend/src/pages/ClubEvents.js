import React, { useState } from 'react';
import EventTypeDropdown from '../components/Events/eventTypeDropdown';
import tagsConfig from '../components/Events/tagsConfig';

export default function ClubEvents() {
    // State to keep track of the selected tag
    const [selectedTag, setSelectedTag] = useState('');

    // Function to handle when a new tag is selected from the dropdown
    const handleTagSelect = (tagName) => {
        setSelectedTag(tagName);
        // Here, call an API to fetch events based on the selected tag.
    };

    // Styles for the container
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Aligns items to the left
        padding: '20px 20px', // Adds spacing on the top and sides
        marginLeft: '0px'
    };

    // Styles for the header
    const headerStyle = {
        color: '#FF5722',
        marginBottom: '10px' // Adds more space below the header
    };

    return (
        <div style={containerStyle}>
            {/* Header */}
            <h1 style={headerStyle}>Discover Events 🐊</h1>
            
            {/* Dropdown */}
            <div>
                {/* Render the EventTypeDropdown component and pass the required props */}
                <EventTypeDropdown tags={tagsConfig} onTagSelect={handleTagSelect} />
            </div>
            
            {/* Display content based on the selected tag */}
            {selectedTag && <p style={{ color: '#0021A5' }}>Events for "{selectedTag}"</p>}
            {/* Here, render the list of events based on the selected tag */}
        </div>
    );
}
