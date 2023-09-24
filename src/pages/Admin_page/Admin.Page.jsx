import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useSelector } from 'react-redux'
export default function Admin_Page() {
    const select = useSelector(state =>state)
    console.log(select);
    const [newMass , setMass] = useState([])
    for(let i = 0; i < select.length; i++) {

    }
    return (
        <div className='admin_component'>
        <div className="row">
            <div className="col-2">
                №
            </div>
            <div className="col-2">
                Name
            </div>
            <div className="col-2">
                Surname
            </div>
            <div className="col-2">
                Kirish vaqti
            </div>
            <div className="col-2">
                chiqish vaqti
            </div>
            {
                (select)?<div>
                    {select.setCard.card.map((item, index) =>{
                        <div>
                        </div>
                    })}
                </div>
                :<div>
                    Hozrch yoq
                </div>
            }
        </div>
    </div>
  )
}
