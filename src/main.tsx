import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { CalendarProvider } from "./hooks/useCalendar.tsx"
import Calendar from "./containers/Calendar.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CalendarProvider>
      <Calendar />
    </CalendarProvider>
  </React.StrictMode>
)
