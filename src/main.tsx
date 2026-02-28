import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'modern-normalize/modern-normalize.css';
import App from './App.tsx';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const root = document.getElementById('root');

if(root !== null){
  createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
}