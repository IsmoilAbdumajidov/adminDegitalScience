import React from 'react'
import { Button } from '@material-tailwind/react'
import { Form, Formik } from 'formik'
import Module from '../module/Module'
import FormControl from '../../utils/form-utils/FormControl'

const AddSubjectForm = ({validationSchema, initialValues, handleOpen, post, onSubmit, open, }) => {
    return (
        <Module open={open} handleOpen={handleOpen} title={"Dars qo'shish"}>
            <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={post ? validationSchema : null} >
                {
                    formik => {
                        return (
                            <Form className='flex flex-col gap-6'>
                                <FormControl control={"input"} name={"name"} label={"Fan nomi"} placeholder={"Fan nomi"} />
                                <FormControl control={"input"} name={"file"} label={"Fan platfoma linki"} placeholder={"Fan platfoma link"} />
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
                    }
                }
            </Formik>
        </Module>
    )
}

export default AddSubjectForm