import { IronSessionOptions } from 'iron-session'
import { User, Role } from '@maxiproswap/database'

export interface Session {
  user?: Pick<User, 'wallet' | 'name' | 'role'>
}

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD!,
  cookieName: 'ice-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

const roleLevel = {
  [Role.ADMIN]: 10,
  [Role.MOD]: 5,
  [Role.USER]: 0,
}

export const isRole = (user: Session['user'], role: Role) => roleLevel[user?.role || Role.USER] >= roleLevel[role]

export const isMod = (user: Session['user']) => isRole(user, Role.MOD)
export const isAdmin = (user: Session['user']) => isRole(user, Role.ADMIN)

export type { User }
