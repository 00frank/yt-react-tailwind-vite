import { io } from 'socket.io-client';

const URL = process.env.NODE_ENV === 'production' ? 'http://localhostinger:3002' : 'http://localhost:3002';

export const socket = io(URL, {
  autoConnect: false
});