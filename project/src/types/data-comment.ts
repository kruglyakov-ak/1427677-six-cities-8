/* eslint-disable camelcase */
type DataComment = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    avatar_url: string,
    id: number,
    is_pro: boolean,
    name: string,
  }
}

export type { DataComment };
