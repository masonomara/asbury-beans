import { useCollection } from '../../hooks/useCollection.js'

// styles
import './VenuesGrid.css'

export default function VenuesGrid() {
  const { isPending, error, documents } = useCollection('venues')

  return (
    <div className="venues__grid container--flex">
      {isPending && <div>Loading venues...</div>}
      {error && <div className="error">{error}</div>}
      {documents && documents.map(venue => (
        <div key={venue.id} className="venue-card">
          <div className="venue-card__photo__container">
            <div className="venue-card__photo" style={{ backgroundImage:`url(${venue.photoURL})` }} />
          </div>
          <div className="venue-card__info">
            <span className="venue-card__title font--title">{venue.name}</span>
            <div className="venue-card__address font--subtitle">
              <span>{venue.address}</span>
              <span>, </span>
              <span>{venue.city}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}