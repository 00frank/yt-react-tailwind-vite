export class VideoType {
  id: string;
  name: string;
  description: string;
  src: string;
  thumbs: { src: string, alt: string }[];
  author: AuthorType;
}

export class AuthorType {
  id: string;
  username: string;
  email: string;
  avatar: string;
}

export class SuscriptionType {
  id: number;
  name: string;
  avatar: string;
  liked: boolean;
}

export class LoggedUserType {
  username?: string;
  email?: string;
  jwt?: string;
  avatar?: string;
}