import React from 'react'
import { Form, Formik } from 'formik'
import { Button } from '@material-tailwind/react'
import Module from '../module/Module'
import FormControl from '../../utils/form-utils/FormControl'

const AddKafedraForm = ({ validationSchema, handleOpen, onSubmit, open, initialValues, title, isPost, type }) => {
    // faculties_id: 1,
    // name: "",
    // content: "",
    // icon: ""
    return (
        <Module open={open} handleOpen={handleOpen} title={title}>

            <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={isPost ? validationSchema : null} >
                {formik => {
                    return (
                        <Form className='flex flex-col gap-6'>
                            <FormControl control={"input"} label={"Sarlavhasi"} name={"name"} placeholder={"Kafedra sarlavhasini kiriting"} />
                            <FormControl control={"file"} accept={".jpg"} label={"Kafedra Logosi"} name={"icon"} />
                            <FormControl control={"textarea"} label={"Kafedra haqida ma'lumot"} name={"content"} placeholder={"Kafedra haqida ma'lumot"} />
                            <div className='flex justify-end gap-3'>
                                <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
                                    <span>Bekor qilish</span>
                                </Button>
                                <button disabled={!formik.isValid || formik.isSubmitting} className='bg px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed' type='submit' variant="gradient" color="green">
                                    <span>Jo'natish</span>
                                </button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </Module>
    )
}

export default AddKafedraForm