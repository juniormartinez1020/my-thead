export type User = {
    id: string
    username: string
    namead: string
    img: string
    biograph: string
}


export type Post = {
    id: string
    createdAt: string
    content: string

    user_id: string
    user: User

    parent_id: string | null
    parent: Post | null

    replyby: Post[]
}