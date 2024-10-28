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
        console.warn('используется устаревший метод, используй "profileAPI.getProfile" ')
        return profileAPI.getProfile(userId)
    }
}


export const authAPI = {
    me: () => {
        return instance.get(`auth/me`, {withCredentials: true})
    },
    login: (email: string, password: string, rememberMe: boolean = false) => {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout: () => {
        return instance.delete(`auth/login`)
    },

}

export const profileAPI = {
    getProfile: (userId: string) => {
        return instance.get(`profile/${userId}`)
    },
    getStatus: (userId: string) => {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus: (status: string) => {
        return instance.put(`profile/status`, {
            status: status
        })
    },
}

