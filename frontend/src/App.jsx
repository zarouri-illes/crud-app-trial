import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, CreateResidence, EditResidence, DeleteResidence, ShowResidence} from '../src/pages/const'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/residence/create' element={<CreateResidence />} />
            <Route path='/residence/edit/:id' element={<EditResidence />} />
            <Route path='/residence/delete/:id' element={<DeleteResidence />} />
            <Route path='/residence/details/:id' element={<ShowResidence />} />
        </Routes>
    )
}

export default App
