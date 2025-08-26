export type Avatar = {
  readonly base64: string,
  readonly fileName: string,
  readonly fileType: string,
  readonly main: boolean
}

export type Avatars = Array<Avatar>
