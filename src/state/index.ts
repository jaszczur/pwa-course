import { Post } from "../model";
import uuid from "uuid/v4";

export interface ApplicationState {
    feed: Post[]
}

export const INITIAL_STATE: ApplicationState = {
    feed: [
        {
            id: uuid(),
            image: "/images/logo.jpg",
            title: "Pościk",
            text: "Jakiś tam tekst",
        },
        {
            id: uuid(),
            image: "/images/logo.jpg",
            title: "Inny pościk",
            text: "Jakiś tam inny tekst",
        },

        {
            id: uuid(),
            image: "/images/logo.jpg",
            title: "Pościk",
            text: "Jakiś tam tekst",
        },
        {
            id: uuid(),
            image: "/images/logo.jpg",
            title: "Inny pościk",
            text: "Jakiś tam inny tekst",
        },
    ]
};