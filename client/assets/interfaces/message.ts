export interface MessageProps {
  role: string;
  content: string;
}

export interface MessageDisplayProps {
  userMessages: MessageProps[];
}