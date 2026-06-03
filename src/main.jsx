import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/app/store.js'
// remove the comment line below to enable tailwind css
// import './index.css'

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <App />
   </Provider>
)