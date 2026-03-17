export default function AppCard({ image, name, biography, birth_year, nationality, known_for, awards }) {
    return (
        <div className="card text-white h-100 rounded-5 actor-card" style={{ backgroundImage: `url(${image})` }}>
            <div className="card-body d-flex flex-column justify-content-end p-4 bg-card-overlay">

                <div className='opacity-50'>{birth_year} - {nationality}</div>

                <h3 className="card-title mt-2">{name}</h3>

                <p className="card-text fs-6">{biography}</p>

                <div className='d-flex flex-wrap opacity-75'>
                    {
                        known_for.map((movie, i) => (
                            <span key={i} className="me-4">{movie}</span>
                        ))
                    }
                </div>

                <div className='d-flex flex-wrap mt-2 opacity-75'>
                    {
                        awards.map((award, i) => (
                            <span key={i} className="me-4">{award}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}