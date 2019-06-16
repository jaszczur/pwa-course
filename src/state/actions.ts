import { Post } from "../model";

export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'

export interface AddPostAction {
  type: typeof ADD_POST,
  post: Post
}

export interface DeletePostAction {
  type: typeof DELETE_POST
  postId: string
}

export type FeedAction = AddPostAction | DeletePostAction
