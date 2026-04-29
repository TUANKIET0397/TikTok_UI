import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Following from '@/pages/Following';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/following" element={<Following />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
