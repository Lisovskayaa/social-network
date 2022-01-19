import * as axios from 'axios'

const instanse = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})

export const userAPI = {
    getUsers() {
        return (
            instanse.get(`/users`)
                .then(response => response.data)
        )
    },
    getUserPage(id) {
        return (
            instanse.get(`/users/${id}`)
                .then(response => console.log(response.data))
        )
    }
}

export const postsAPI = {
    getPosts() {
        return (
            instanse.get(`/posts?_limit=3`)
                .then(response => response.data)
        )
    },
    getComments() {
        return (
            instanse.get(`/posts/1/comments`)
                .then(response => response.data)
        )

    },
    postNewComment(body) {
        return (
            instanse.post('/comments', { body })
                .then(response => response.data)
        )
    },
    postNewUserPost(body) {
        return (
            instanse.post(`/posts`, { body })
                .then(response => response.data)
        )
    },
    updateUserPost(id, body) {
        return (
            instanse.put(`/posts/${id}`, { body })
                .then(response => response.data)
        )
    },
    deleteUserPost(id) {
        return (
            instanse.delete(`/posts/${id}`)
                .then(response => response.data)
        )
    }
}
export const photosAPI = {
    getPhotos() {
        return (
            instanse.get(`/photos?_limit=10`)
                .then(response => response.data)
        )
    }
}



