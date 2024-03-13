import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import * as Yup from "yup"
import AccordionAdmin from './AccordionAdmin';
import AddKafedraForm from './AddKafedraForm';
import { patchKafedra, postKafedra } from '../../hooks/AdminApi';
import { instance } from '../../api/axios';


const AddkafedraCom = ({ courseData }) => {
    const [open, setOpen] = useState(false);
    const [isPost, setIsPost] = useState("")


    // initial values
    const initialValueObjs = {
        faculties_id: 1,
        name: "",
        content: "",
        icon: ""
    }

    // initial values state
    const [initialValues, setInitialValues] = useState(initialValueObjs)

    const { mutate: postMutate, isSuccess: postSuccess } = postKafedra()
    const { mutate: patchMutate, isSuccess: patchSuccess } = patchKafedra()

    // validation with Yup
    const validationSchema = Yup.object({
        name: Yup.string().required("Ma'lumot kiritilmadi"),
        content: Yup.string().required("Ma'lumot kiritilmadi"),
        icon: Yup.mixed().required("Ma'lumot kiritilmadi"),
    })

    // onsubmit function
    const onSubmit = (values, onSubmitProps) => {
        const formData = new FormData();
        formData.append('image', values.icon);
        if (isPost) {
            postMutate(values)
        }
        else {
            patchMutate(
                {
                    title: values.name,
                    poster_image: values.icon,
                    content: values.content,
                    id: values.id
                }
            )
        }
        setTimeout(() => {
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
        }, 3000);
    }

    // close module when submitted success
    useEffect(() => {
        if (postSuccess || patchSuccess) {
            setOpen(false)
        }
    }, [postSuccess, patchSuccess])

    // edit function
    const EditCourse = (element) => {
        setOpen(true)
        setInitialValues({})
    }

    // toggle module
    const handleOpen = () => { setOpen(!open), setIsPost(true), setInitialValues(initialValueObjs) };
    return (
        <div className='mt-10'>
            <AddKafedraForm isPost={isPost} type={"kurs"} open={open} handleOpen={handleOpen} validationSchema={validationSchema} onSubmit={onSubmit} initialValues={initialValues} title={"Kurs qo'shish"} />
            <div className='flex justify-end'>
                <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span>Kafedra qo'shish</span>
                </Button>
            </div>
            {courseData ?
                <div className='overflow-x-scroll'>
                    <div className='border-b px-3 text-sm    font-semibold min-w-[900px] py-2 border-gray-400 flex justify-between'>
                        <div className='flex flex-1 gap-5 items-center'>
                            <div className='w-14'>Logo</div>
                            <div>Sarlavha</div>
                        </div>
                        <div className='w-[100px]'>Sozlamalar</div>
                    </div>
                    <div className='min-w-[900px]'>
                        {courseData?.map((data, i) => (
                            <AccordionAdmin setIsPost={setIsPost} edit={EditCourse} key={i} data={data} />
                        ))}
                    </div>
                </div>

                : "Kurslar kitilmadi..."}

        </div>
    )
}

export default AddkafedraCom