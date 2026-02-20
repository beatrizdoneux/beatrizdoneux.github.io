import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { BrowserRouter } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import Experience from './components/webgl/Experience.jsx';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(
    <BrowserRouter>
        <Canvas
            className="fixed top-0 left-0 w-full h-full -z-10"
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [2.5, 4, 6]
            }}
        >
            <Experience />
        </Canvas>

        <App />
    </BrowserRouter>
)
