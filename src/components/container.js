import React from 'react'

export default ({ children }) => (
  <div style={{ maxWidth: "100%", margin: '0 auto', display:"grid", gridTemplateRows:"auto 1fr auto" , minHeight:"100vh"}}>{children}</div>
)
