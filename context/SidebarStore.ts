import { atom } from 'nanostores';

export const isSidebarCollapsed = atom(false);

export const setUpdateState = () => {
    isSidebarCollapsed.set(!isSidebarCollapsed.get())
} 
