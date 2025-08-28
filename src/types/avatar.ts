export type Avatar = {
  readonly base64: unknown,
  readonly fileName: string,
  readonly fileType: string,
  readonly main: boolean
}

export type Avatars = Array<Avatar>
