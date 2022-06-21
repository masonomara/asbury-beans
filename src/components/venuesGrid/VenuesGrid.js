import { useCollection } from '../../hooks/useCollection.js'

// components
import Venue from '../venue/Venue.js'

// styles
import './VenuesGrid.css'

export default function VenuesGrid() {
const { isPending, error, documents } = useCollection('venues')

  return (
    <div className="venues-grid">
      {isPending && <div>Loading venues...</div>}
      {error && <div className="error">{error}</div>}
      {documents && documents.map(venue => (
        <div key={venue.id}>
          <span>{venue.venueName}</span>
          <Venue src={venue.photoURL} />
        </div>
      ))}
    </div>
  )
}