import React from 'react';
import styled from 'styled-components';
import ContentLoader from "react-content-loader";

// Styled components for highlighting entities
const Entity = styled.span<{ type: string }>`
    background-color: ${props => {
        switch (props.type) {
            case 'Angka': return '#FFB3BA'; // Pastel Pink
            case 'Tanggal': return '#FFDFBA'; // Pastel Orange
            case 'Peristiwa': return '#FFFFBA'; // Pastel Yellow
            case 'Fasilitas': return '#BAFFC9'; // Pastel Green
            case 'Entitas Geologi': return '#BAE1FF'; // Pastel Blue
            case 'Bahasa': return '#E2C6FF'; // Pastel Purple
            case 'Hukum': return '#FFD1DC'; // Pastel Rose
            case 'Lokasi': return '#F7E1A0'; // Pastel Lemon
            case 'Uang': return '#B4E5FF'; // Pastel Sky Blue
            case 'Norma': return '#D4A5A5'; // Pastel Brown
            case 'Ordinat': return '#FFB2A1'; // Pastel Coral
            case 'Organisasi': return '#C2FFD2'; // Pastel Mint
            case 'Orang': return '#A1CFF7'; // Pastel Periwinkle
            case 'Proses': return '#FFE4E1'; // Pastel Pink Blush
            case 'Produk': return '#D7C4BB'; // Pastel Latte
            case 'Jumlah': return '#E6A1E6'; // Pastel Lavender
            case 'Agama': return '#FFB3BA'; // Pastel Pink
            case 'Waktu': return '#FFDFBA'; // Pastel Orange
            case 'Karya': return '#FFFFBA'; // Pastel Yellow
            default: return 'none';
        }
    }};
    color: ${props => {
        switch (props.type) {
            case 'Angka':
            case 'Tanggal':
            case 'Peristiwa':
            case 'Fasilitas':
            case 'Entitas Geologi':
            case 'Bahasa':
            case 'Hukum':
            case 'Lokasi':
            case 'Uang':
            case 'Norma':
            case 'Ordinat':
            case 'Organisasi':
            case 'Orang':
            case 'Proses':
            case 'Produk':
            case 'Jumlah':
            case 'Agama':
            case 'Waktu':
            case 'Karya': return '#000000'; // Black
            default: return 'inherit';
        }
    }};
    padding: 2px 4px;
    border-radius: 4px;
`;

const LoadingSpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
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

            // Push the entity with its label
            parts.push({ value: `${entityValue} [${entityType}]`, type: entityType });

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
            <div className="order-7 col-span-12 2xl:order-1 card 2xl:col-span-12">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                        <h6 className="mb-3 text-15 grow">Named Entity Recognition</h6>
                    </div>
                    <div>
                        {nerAnalysis ? (
                            parsedEntities.map((entity, index) => (
                                entity.type ? (
                                    <Entity key={index} type={entity.type}>{entity.value}</Entity>
                                ) : (
                                    <span key={index}>{entity.value} </span>
                                )
                            ))
                        ) : (
                            <ContentLoader
                                speed={1.5}
                                width={1080}
                                height={84}
                                viewBox="0 0 1080 84"
                                backgroundColor="#9e9e9e"
                                foregroundColor="#ffffff"
                            >
                                <rect x="14" y="5" rx="3" ry="3" width="67" height="11" />
                                <rect x="76" y="5" rx="3" ry="3" width="140" height="11" />
                                <rect x="127" y="53" rx="3" ry="3" width="53" height="11" />
                                <rect x="187" y="53" rx="3" ry="3" width="72" height="11" />
                                <rect x="18" y="53" rx="3" ry="3" width="100" height="11" />
                                <rect x="18" y="28" rx="3" ry="3" width="140" height="11" />
                                <rect x="166" y="28" rx="3" ry="3" width="173" height="11" />
                                <rect x="332" y="5" rx="3" ry="3" width="53" height="11" />
                                <rect x="392" y="5" rx="3" ry="3" width="72" height="11" />
                                <rect x="223" y="5" rx="3" ry="3" width="100" height="11" />
                                <rect x="266" y="53" rx="3" ry="3" width="67" height="11" />
                                <rect x="342" y="53" rx="3" ry="3" width="140" height="11" />
                                <rect x="598" y="53" rx="3" ry="3" width="53" height="11" />
                                <rect x="658" y="53" rx="3" ry="3" width="72" height="11" />
                                <rect x="489" y="53" rx="3" ry="3" width="100" height="11" />
                                <rect x="348" y="28" rx="3" ry="3" width="140" height="11" />
                                <rect x="604" y="28" rx="3" ry="3" width="53" height="11" />
                                <rect x="664" y="28" rx="3" ry="3" width="72" height="11" />
                                <rect x="495" y="28" rx="3" ry="3" width="100" height="11" />
                                <rect x="583" y="5" rx="3" ry="3" width="53" height="11" />
                                <rect x="643" y="5" rx="3" ry="3" width="72" height="11" />
                                <rect x="474" y="5" rx="3" ry="3" width="100" height="11" />
                                <rect x="722" y="5" rx="3" ry="3" width="67" height="11" />
                                <rect x="740" y="5" rx="3" ry="3" width="67" height="11" />
                            </ContentLoader>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NamedEntityRecognition;
