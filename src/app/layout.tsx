import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div>
      <h1>this is Root Layout</h1>
      <Outlet />
    </div>
  )
}
