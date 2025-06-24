// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import AppUseEffectExample from './AppUseEffectExample.tsx'
// import AppUseEffectWithMemo from './AppUseEffectWithMemo.tsx'
// import AppUseMemoSearching from './AppUseMemoSearching.tsx'
import AppUseMemoToggle from './AppUseMemoToggle.tsx'
// import AppSearchingWithoutUseMemo from './AppSearchingWithoutUseMemo.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    // <App />
    // <AppUseEffectExample/>
    // <AppUseEffectWithMemo/>
    // <AppUseMemoSearching/>
    <AppUseMemoToggle/>
    // <AppSearchingWithoutUseMemo/>
  // </StrictMode>,
)
