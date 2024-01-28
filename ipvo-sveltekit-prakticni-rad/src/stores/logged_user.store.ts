import { writable } from "svelte/store";
import type LoggedUserInterface from "../interfaces/logged_user.interface";

export const loggedUserStore = writable<LoggedUserInterface>({
    user_id: 0,
    username: '',
    user_type: 0,
});