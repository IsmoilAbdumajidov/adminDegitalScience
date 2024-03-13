import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { instance } from "../api/axios"
import { toast } from "react-toastify"

export const getKafedraAdmin = () => {
    return useQuery(["kafedraAdmin"], () => instance.post(`canfedras`, { id: 0 }), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => console.log(data),
        onError: (error) => {
            toast.error("Qandaydir xatolik bor")
            console.log(error);
        }
    })
}

export const postKafedra = () => {
    const queryClient = useQueryClient()
    return useMutation((data) => instance.post("admin/canfedra/create", data,

        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    ),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["kafedraAdmin"] });
                console.log(data);
                toast.success("Yangi Kafedra qo'shildi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}

export const patchKafedra = () => {
    const queryClient = useQueryClient()
    return useMutation((data) => instance.patch(`admin/update_course/${data.id}/`, data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
        ,
    ),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["kafedraAdmin"] });
                console.log(data);
                // navigate('/user-page/my-kurs')
                toast.success("Kafedra o'zgartirildi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}

export const deleteKafedra = () => {
    const queryClient = useQueryClient()
    return useMutation((data) => instance.delete(`admin/delete_course/${data}/`,
    ),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["kafedraAdmin"] });
                console.log(data);
                // navigate('/user-page/my-kurs')
                toast.success("Kafedra o'chirildi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}

export const addSubject = () => {
    // const queryClient = useQueryClient()
    return useMutation((data) => instance.post("admin/resource/create/", data),
        {
            onSuccess: (data) => {
                console.log(data);
                toast.success("Yangi Fan qo'shildi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}

export const deleteSubject = () => {
    // const queryClient = useQueryClient()
    return useMutation((data) => instance.delete(`admin/delete_article/${data}/`,

    ),
        {
            onSuccess: (data) => {
                // queryClient.invalidateQueries({ queryKey: ["courseAdmin"] });
                console.log(data);
                // navigate('/user-page/my-kurs')
                toast.success("Fan o'chirildi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}

export const patchSubject = () => {
    return useMutation((data) => instance.patch(`admin/update_article/${data.id}/`, data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    ),
        {
            onSuccess: (data) => {
                console.log(data);
                toast.success("Fan o'zgartiriladi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}



