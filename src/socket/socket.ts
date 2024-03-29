import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' ? import.meta.env.VITE_WS_URL : 'http://localhost:3002';

export const socket = io(URL, {
  autoConnect: false
});