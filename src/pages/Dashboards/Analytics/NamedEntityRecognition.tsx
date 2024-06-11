import React from 'react';
import styled from 'styled-components';

// Styled components for highlighting entities
const Entity = styled.span<{ type: string }>`
    background-color: ${props => {
        switch (props.type) {
            case 'Angka': return '#8B0000';
            case 'Entitas Geologi': return '#006400';
            case 'Orang': return '#00008B';
            case 'Organisasi': return '#8B8000';
            default: return 'none';
        }
    }};
    padding: 2px 4px;
    border-radius: 4px;
`;

interface NamedEntityRecognitionProps {
    nerAnalysis: string | null; // Updated to accept null value
}

const NamedEntityRecognition: React.FC<NamedEntityRecognitionProps> = ({ nerAnalysis }) => {
    // Function to parse NER analysis and apply styles
    const parseNER = (nerAnalysis: string) => {
        // Check if nerAnalysis is null
        if (!nerAnalysis) return [];

        // Remove tokenization markers ## and two spaces before them
        const cleanText = nerAnalysis.replace(/ {0,2}##/g, '');

        // Regular expression to find entities in brackets
        const regex = /(\S+)\s\[(.*?)\]/g;
        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(cleanText)) !== null) {
            const entityValue = match[1];
            const entityType = match[2];

            // Push text before the entity
            if (match.index > lastIndex) {
                parts.push({ value: cleanText.slice(lastIndex, match.index).trim(), type: null });
            }

            // Push the entity
            parts.push({ value: entityValue, type: entityType });

            // Update the lastIndex
            lastIndex = regex.lastIndex;
        }

        // Push any remaining text after the last entity
        if (lastIndex < cleanText.length) {
            parts.push({ value: cleanText.slice(lastIndex).trim(), type: null });
        }

        return parts;
    };

    const parsedEntities = parseNER(nerAnalysis || ''); // Provide empty string if nerAnalysis is null

    return (
        <React.Fragment>
            <div className="order-6 col-span-12 2xl:order-1 card 2xl:col-span-5">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                        <h6 className="mb-3 text-15 grow">Named Entity Recognition</h6>
                    </div>
                    <div>
                        {parsedEntities.map((entity, index) => (
                            entity.type ? (
                                <Entity key={index} type={entity.type}>{entity.value}</Entity>
                            ) : (
                                <span key={index}>{entity.value} </span>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NamedEntityRecognition;
