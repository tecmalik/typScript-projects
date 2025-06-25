export interface Todo{
    id : string;
    text : string;
    completed: boolean;
} 

export type AddTodo = (text: string) => void;
export type ToggleTodo = (id: string) => void;
export type DeleteTodo = (id: string) => void;
