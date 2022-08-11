import { useState } from 'react'
import { Fireworks } from '@fireworks-js/react'

 function Firework() {
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <button
        onClick={() => setEnabled(!enabled)}
        style={{ position: 'absolute', zIndex: 1 }}
      >
        {enabled ? 'Enabled' : 'Disabled'}
      </button>
      {enabled && (
        <Fireworks
          options={{ opacity: 0.5 }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
            background: '#00000000'
          }}
        />
      )}
    </>
  )
}

export default Firework;