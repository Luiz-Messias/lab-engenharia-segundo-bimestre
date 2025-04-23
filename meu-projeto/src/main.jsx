import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Letreiro from './Letreiro/Letreiro'
import Relogio from './Relogio/Relogio'

createRoot(document.getElementById('root')).render(
    <div>
    <App />
    <Relogio />
    <Letreiro />
    </div>
)
