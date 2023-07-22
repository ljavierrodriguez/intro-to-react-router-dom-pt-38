import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Services = () => {
    const [services] = useState([
        { id: 1, service: 'Fullstack' },
        { id: 2, service: 'Backend' },
        { id: 3, service: 'Frontend' },
    ])

    const [currentService, setCurrentService] = useState("");

    const { service_id, service_name } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        setCurrentService(service_name)
    }, [service_id, service_name])

    return (
        <>
            <div>Services {currentService}-{service_id}</div>
            <ul className='w-50 list-group'>
                {
                    services.map((s) => {
                        return (
                            <li key={s.id} className='list-group-item'>
                                <Link className="link" to={`/services/${s.id}/${s.service}`}>
                                    {s.service}
                                </Link>
                            </li>
                        )
                    })
                }
                {/* <Link className="link" to={`/services/aaa/111`}>
                    Others
                </Link> */}
            <button className="btn btn-warning" onClick={() => navigate(-1)}>
                Regresar
            </button>
            </ul>
        </>
    )
}

export default Services