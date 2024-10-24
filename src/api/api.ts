import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '733dfb2b-ad38-4924-a41f-9ae9ca6660c4'
    }
})

export const userAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        )
            .then(res => res.data)
    },
    follow: (userId: number) => {
        return instance.post(`follow/${userId}`)
    },
    unFollow: (userId: number) => {
        return instance.delete(`follow/${userId}`)
    },
    getProfile: (userId: string) => {
        return instance.get(`profile/${userId}`)
    }
}


export const authAPI = {
    me: () => {
        return instance.get(`auth/me`, {withCredentials: true})
    },

}


