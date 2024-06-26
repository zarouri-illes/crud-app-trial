import { React, useState, useEffect } from 'react'
import Spinner from '../components/Spinner'
import axios, { Axios } from 'axios'
import { Link } from 'react-router-dom'


const Home = () => {

    const [residences, setResidences] = useState([])
    const [loading , setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get(('http://localhost:3000/residence'))
            .then((res) => {
                setResidences(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1>residences list</h1>

                <Link to='/residence/create'>
                    <button className='bg-green-500 text-white px-8 py-2 rounded-md'>Create</button>
                </Link>
            </div>

            {
                loading ? (
                    <Spinner />
                ) : (
                    <table className='w-full border-separate border-spacing-2'>
                        <thead>
                            <tr>
                                <th className='border border-gray-500 rounded-md'>number</th>
                                <th className='border border-gray-500 rounded-md'>title</th>
                                <th className='border border-gray-500 rounded-md'>location</th>
                                <th className='border border-gray-500 rounded-md'>appartements</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                residences.map((item, index) => (
                                    <tr key={item._id} className='h-8'>
                                        <td className='border text-center border-gray-600 rounded-md border-spacing-2'>
                                            { index + 1 }
                                        </td>
                                        <td className='border text-center border-gray-600 rounded-md border-spacing-2'>
                                            { item.title }
                                        </td>
                                        <td className='border text-center border-gray-600 rounded-md border-spacing-2'>
                                            { item.location }
                                        </td>
                                        <td className='border text-center border-gray-600 rounded-md border-spacing-2'>
                                            { item.numberOfAppartements }
                                        </td>
                                        <td className='border text-center border-gray-600 rounded-md border-spacing-2'>
                                            <div className='flex justify-center gap-x-4'>
                                                <Link to={`/residence/details/${item._id}`}>

                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}

export default Home
