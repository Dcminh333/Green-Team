import React, { useState } from 'react';
import EventTypeDropdown from '../components/Events/eventTypeDropdown';
import tagsConfig from '../components/Events/tagsConfig';

export default function ClubEvents() {
    const [selectedTag, setSelectedTag] = useState('');

    const handleTagSelect = (tagName) => {
        setSelectedTag(tagName);
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Aligns items to the left
        padding: '20px 20px', // Adds spacing on the top and sides
        marginLeft: '0px'
    };

    const headerStyle = {
        color: '#FF5722',
        marginBottom: '10px' // Adds more space below the header
    };

    const dropdownStyle = {
        marginBottom: '20px' // Adds space below the dropdown
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Discover Events 🐊</h1>
            <div style={dropdownStyle}>
                {/* Render the EventTypeDropdown component and pass the required props */}
                <EventTypeDropdown tags={tagsConfig} onTagSelect={handleTagSelect} />
            </div>
            {/* Display content based on the selected tag */}
            {selectedTag && <p style={{ color: '#FF5722' }}>Events for "{selectedTag}"</p>}
        </div>
    );
}
