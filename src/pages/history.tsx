import React from 'react';
import { useNavigate } from 'react-router-dom';

const History: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/herwaree/ComingSoon'); // Update this path as necessary
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>History Page</h1>
            <p style={styles.description}>History will be available soon!</p>
            <button style={styles.button} onClick={handleNavigate}>
                Coming Soon!
            </button>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        color: '#333',
    },
    header: {
        fontSize: '3rem',
    },
    description: {
        fontSize: '1.5rem',
        margin: '20px 0',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default History;
