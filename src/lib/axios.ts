import axios from 'axios'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import Router from 'next/router'
import { API_URL } from '../helpers/GlobalHelper'

export const publicApi = axios.create({
  baseURL: API_URL
})

export function api() {
  const req = axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${getCookie('access_token')}`
    }
  })

  req.interceptors.response.use(
    response => {
      if (response.data.hasOwnProperty('access_token')) {
        setCookie('access_token', response.data.access_token)
      }
      return response
    },
    error => {
      if (error.response.status === 401) {
        deleteCookie('access_token')
        deleteCookie('user')
        Router.push(
          {
            pathname: '/login',
            query: {
              isSessionExpired: true
            }
          },
          '/login'
        )
      }

      return error
    }
  )

  return req
}
