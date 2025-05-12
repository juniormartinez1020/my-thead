import { Post, User } from "./types"

export const DummyUsers : User[] = [
   
    {
          "id": "user-1",
          "username": "alpha",
          "namead": "Alpha User",
          "img": "https://example.com/img/alpha.jpg",
          "biograph": "First user."
    },
    {
          "id": "user-2",
          "username": "beta",
          "namead": "Beta User",
          "img": "https://example.com/img/beta.jpg",
          "biograph": "Second user."
        },
        {
          "id": "user-3",
          "username": "gamma",
          "namead": "Gamma User",
          "img": "https://example.com/img/gamma.jpg",
          "biograph": "Third user."
        },
        {
          "id": "user-4",
          "username": "delta",
          "namead": "Delta User",
          "img": "https://example.com/img/delta.jpg",
          "biograph": "Fourth user."
        },
        {
          "id": "user-5",
          "username": "epsilon",
          "namead": "Epsilon User",
          "img": "https://example.com/img/epsilon.jpg",
          "biograph": "Fifth user."
        }
]

export const DummyPosts : Post[] = [
        {
          "id": "post-1",
          "createdAt": "2023-10-27T12:00:00Z",
          "content": "This is the first post by Alpha.",
          "user_id": "user-1",
          "user": {
            "id": "user-1",
            "username": "alpha",
            "namead": "Alpha User",
            "img": "https://example.com/img/alpha.jpg",
            "biograph": "First user."
          },
          "parent_id": null,
          "parent": null,
          "replyby": []
        },
        {
          "id": "post-2",
          "createdAt": "2023-10-27T12:05:00Z",
          "content": "Beta's initial thought.",
          "user_id": "user-2",
          "user": {
            "id": "user-2",
            "username": "beta",
            "namead": "Beta User",
            "img": "https://example.com/img/beta.jpg",
            "biograph": "Second user."
          },
          "parent_id": null,
          "parent": null,
          "replyby": []
        },
        {
          "id": "post-3",
          "createdAt": "2023-10-27T12:10:00Z",
          "content": "Replying to Alpha.",
          "user_id": "user-3",
          "user": {
            "id": "user-3",
            "username": "gamma",
            "namead": "Gamma User",
            "img": "https://example.com/img/gamma.jpg",
            "biograph": "Third user."
          },
          "parent_id": "post-1",
          "parent": {
            "id": "post-1",
            "createdAt": "2023-10-27T12:00:00Z",
            "content": "This is the first post by Alpha.",
            "user_id": "user-1",
            "user": {
              "id": "user-1",
              "username": "alpha",
              "namead": "Alpha User",
              "img": "https://example.com/img/alpha.jpg",
              "biograph": "First user."
            },
            "parent_id": null,
            "parent": null,
            "replyby": []
          },
          "replyby": []
        },
        {
          "id": "post-4",
          "createdAt": "2023-10-27T12:15:00Z",
          "content": "Adding to Gamma's reply.",
          "user_id": "user-4",
          "user": {
            "id": "user-4",
            "username": "delta",
            "namead": "Delta User",
            "img": "https://example.com/img/delta.jpg",
            "biograph": "Fourth user."
          },
          "parent_id": "post-3",
          "parent": {
            "id": "post-3",
            "createdAt": "2023-10-27T12:10:00Z",
            "content": "Replying to Alpha.",
            "user_id": "user-3",
            "user": {
              "id": "user-3",
              "username": "gamma",
              "namead": "Gamma User",
              "img": "https://example.com/img/gamma.jpg",
              "biograph": "Third user."
            },
            "parent_id": "post-1",
            "parent": {
              "id": "post-1",
              "createdAt": "2023-10-27T12:00:00Z",
              "content": "This is the first post by Alpha.",
              "user_id": "user-1",
              "user": {
                "id": "user-1",
                "username": "alpha",
                "namead": "Alpha User",
                "img": "https://example.com/img/alpha.jpg",
                "biograph": "First user."
              },
              "parent_id": null,
              "parent": null,
              "replyby": []
            },
            "replyby": []
          },
          "replyby": []
        },
        {
          "id": "post-5",
          "createdAt": "2023-10-27T12:20:00Z",
          "content": "Epsilon's turn to post.",
          "user_id": "user-5",
          "user": {
            "id": "user-5",
            "username": "epsilon",
            "namead": "Epsilon User",
            "img": "https://example.com/img/epsilon.jpg",
            "biograph": "Fifth user."
          },
          "parent_id": null,
          "parent": null,
          "replyby": []
        },
        {
          "id": "post-6",
          "createdAt": "2023-10-27T12:25:00Z",
          "content": "Replying to Beta.",
          "user_id": "user-1",
          "user": {
            "id": "user-1",
            "username": "alpha",
            "namead": "Alpha User",
            "img": "https://example.com/img/alpha.jpg",
            "biograph": "First user."
          },
          "parent_id": "post-2",
          "parent": {
            "id": "post-2",
            "createdAt": "2023-10-27T12:05:00Z",
            "content": "Beta's initial thought.",
            "user_id": "user-2",
            "user": {
              "id": "user-2",
              "username": "beta",
              "namead": "Beta User",
              "img": "https://example.com/img/beta.jpg",
              "biograph": "Second user."
            },
            "parent_id": null,
            "parent": null,
            "replyby": []
          },
          "replyby": []
        },
        {
          "id": "post-7",
          "createdAt": "2023-10-27T12:30:00Z",
          "content": "Following up on Alpha's reply.",
          "user_id": "user-2",
          "user": {
            "id": "user-2",
            "username": "beta",
            "namead": "Beta User",
            "img": "https://example.com/img/beta.jpg",
            "biograph": "Second user."
          },
          "parent_id": "post-6",
          "parent": {
            "id": "post-6",
            "createdAt": "2023-10-27T12:25:00Z",
            "content": "Replying to Beta.",
            "user_id": "user-1",
            "user": {
              "id": "user-1",
              "username": "alpha",
              "namead": "Alpha User",
              "img": "https://example.com/img/alpha.jpg",
              "biograph": "First user."
            },
            "parent_id": "post-2",
            "parent": {
              "id": "post-2",
              "createdAt": "2023-10-27T12:05:00Z",
              "content": "Beta's initial thought.",
              "user_id": "user-2",
              "user": {
                "id": "user-2",
                "username": "beta",
                "namead": "Beta User",
                "img": "https://example.com/img/beta.jpg",
                "biograph": "Second user."
              },
              "parent_id": null,
              "parent": null,
              "replyby": []
            },
            "replyby": []
          },
          "replyby": []
        },
        {
          "id": "post-8",
          "createdAt": "2023-10-27T12:35:00Z",
          "content": "Another post by Gamma.",
          "user_id": "user-3",
          "user": {
            "id": "user-3",
            "username": "gamma",
            "namead": "Gamma User",
            "img": "https://example.com/img/gamma.jpg",
            "biograph": "Third user."
          },
          "parent_id": null,
          "parent": null,
          "replyby": []
        },
        {
          "id": "post-9",
          "createdAt": "2023-10-27T12:40:00Z",
          "content": "Delta replies to Gamma.",
          "user_id": "user-4",
          "user": {
            "id": "user-4",
            "username": "delta",
            "namead": "Delta User",
            "img": "https://example.com/img/delta.jpg",
            "biograph": "Fourth user."
          },
          "parent_id": "post-8",
          "parent": {
            "id": "post-8",
            "createdAt": "2023-10-27T12:35:00Z",
            "content": "Another post by Gamma.",
            "user_id": "user-3",
            "user": {
              "id": "user-3",
              "username": "gamma",
              "namead": "Gamma User",
              "img": "https://example.com/img/gamma.jpg",
              "biograph": "Third user."
            },
            "parent_id": null,
            "parent": null,
            "replyby": []
          },
          "replyby": []
        },
        {
          "id": "post-10",
          "createdAt": "2023-10-27T12:45:00Z",
          "content": "Epsilon also replies to Gamma.",
          "user_id": "user-5",
          "user": {
            "id": "user-5",
            "username": "epsilon",
            "namead": "Epsilon User",
            "img": "https://example.com/img/epsilon.jpg",
            "biograph": "Fifth user."
          },
          "parent_id": "post-8",
          "parent": {
            "id": "post-8",
            "createdAt": "2023-10-27T12:35:00Z",
            "content": "Another post by Gamma.",
            "user_id": "user-3",
            "user": {
              "id": "user-3",
              "username": "gamma",
              "namead": "Gamma User",
              "img": "https://example.com/img/gamma.jpg",
              "biograph": "Third user."
            },
            "parent_id": null,
            "parent": null,
            "replyby": []
          },
          "replyby": []
        },
        {
          "id": "post-11",
          "createdAt": "2023-10-27T12:50:00Z",
          "content": "Delta's standalone post.",
          "user_id": "user-4",
          "user": {
            "id": "user-4",
            "username": "delta",
            "namead": "Delta User",
            "img": "https://example.com/img/delta.jpg",
            "biograph": "Fourth user."
          },
          "parent_id": null,
          "parent": null,
          "replyby": []
        },
        {
          "id": "post-12",
          "createdAt": "2023-10-27T12:55:00Z",
          "content": "Alpha replies to Delta.",
          "user_id": "user-1",
          "user": {
            "id": "user-1",
            "username": "alpha",
            "namead": "Alpha User",
            "img": "https://example.com/img/alpha.jpg",
            "biograph": "First user."
          },
          "parent_id": "post-11",
          "parent": {
            "id": "post-11",
            "createdAt": "2023-10-27T12:50:00Z",
            "content": "Delta's standalone post.",
            "user_id": "user-4",
            "user": {
              "id": "user-4",
              "username": "delta",
              "namead": "Delta User",
              "img": "https://example.com/img/delta.jpg",
              "biograph": "Fourth user."
            },
            "parent_id": null,
            "parent": null,
            "replyby": []
          },
          "replyby": []
        },
        {
          "id": "post-13",
          "createdAt": "2023-10-27T13:00:00Z",
          "content": "Beta replies to Delta as well.",
          "user_id": "user-2",
          "user": {
            "id": "user-2",
            "username": "beta",
            "namead": "Beta User",
            "img": "https://example.com/img/beta.jpg",
            "biograph": "Second user."
          },
          "parent_id": "post-11",
          "parent": {
            "id": "post-11",
            "createdAt": "2023-10-27T12:50:00Z",
            "content": "Delta's standalone post.",
            "user_id": "user-4",
            "user": {
              "id": "user-4",
              "username": "delta",
              "namead": "Delta User",
              "img": "https://example.com/img/delta.jpg",
              "biograph": "Fourth user."
            },
            "parent_id": null,
            "parent": null,
            "replyby": []
          },
          "replyby": []
        },
        {
          "id": "post-14",
          "createdAt": "2023-10-27T13:05:00Z",
          "content": "Final post by Alpha.",
          "user_id": "user-1",
          "user": {
            "id": "user-1",
            "username": "alpha",
            "namead": "Alpha User",
            "img": "https://example.com/img/alpha.jpg",
            "biograph": "First user."
          },
          "parent_id": null,
          "parent": null,
          "replyby": []
        }
]