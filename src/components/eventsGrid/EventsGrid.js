import { useCollection } from '../../hooks/useCollection.js'

// styles
import './EventsGrid.css'

export default function EventsGrid() {
  const { isPending, error, documents } = useCollection('events');


  return (
    <div className="events__grid container--flex">
      {isPending && <div>Loading events...</div>}
      {error && <div className="error">{error}</div>}
      {documents && documents.map(event => (
        <div key={event.id} className="event-card">
          <div className="event-card__photo__container">
            <div className="event-card__photo" style={{ backgroundImage:`url(${event.photoURL})` }} />
          </div>
          <div className="event-card__info">
            <span className="event-card__title font--title">{event.name}</span>
            <div className="event-card__address font--subtitle">
              <span>{event.name}</span>
              <span>, </span>
              <span>{event.city}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}