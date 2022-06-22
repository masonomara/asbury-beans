import { useState, useEffect } from 'react'
import { projectFirestore } from '../../firebase/config'

//styles
import "./EventsGridVenueName.css"

export default function EventsGridVenueName( id ) {
  
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [venues, setVenues] = useState(null)

  const { venueID } = JSON.stringify(id)

  console.log(venueID)

  useEffect(() => {
    setIsPending(true)
    
    projectFirestore.collection('venues').doc(venueID).get().then(doc => {
        if (doc.exists) {
          setIsPending(false)
          setVenues(doc.data())
        } else {
          setIsPending(false)
          setError(`Could not find that venue`)
        }
      })

  }, [venueID])

  return (
  <div>
    {error && <p className="error">{error}</p>}
    {isPending && <p className="loading">Loading...</p>}
    {venues && (
      <>
        <h2>{venues.name}</h2>
      </>
    )}
  </div>
)}