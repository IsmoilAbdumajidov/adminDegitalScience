import React, { useEffect } from 'react'
import AddkafedraCom from '../components/add-kafedra/AddkafedraCom'
import { getKafedraAdmin } from '../hooks/AdminApi'

const AddKafedra = () => {
    const {data} = getKafedraAdmin()
    console.log(data?.data.data);
    return (
        <div>
            <AddkafedraCom courseData={data?.data?.data}/>
        </div>
    )
}

export default AddKafedra