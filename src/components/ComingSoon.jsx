// ComingSoon.jsx
function ComingSoon() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            padding: '2rem',
            background: 'linear-gradient(135deg, #d3d3d3, #e6e6fa)', // diagonal from light grey to lavender
            color: '#333'
        }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                ✨ Portfolio Redesign Coming Soon! ✨
            </h1>
            <p style={{ fontSize: '1.2rem' }}>
                Check back soon for the new look!
            </p>
        </div>
    );
}

export default ComingSoon;

