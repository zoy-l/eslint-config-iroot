const React = require('react')

export default function App() {
  const a = 1
  return (
    <div>
      {[1, 2].map((i) => (
        <p>{i}</p>
      ))}
    </div>
  )
}
