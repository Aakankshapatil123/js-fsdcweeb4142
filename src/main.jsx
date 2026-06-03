import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactionsStore from './contexts/ReactionsStore.jsx'
// remove the comment line below to enable tailwind css
// import './index.css'

createRoot(document.getElementById('root')).render(
<ReactionsStore>
    <App />
</ReactionsStore>
)
