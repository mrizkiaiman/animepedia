import { NextRouter } from 'next/router'
import React, { Ref } from 'react'
import type { ReactNode } from 'react'

export interface WithChildren {
  children: React.ReactNode
}
export interface APIResponse<T = any> {
  links?: any
  meta?: any
  data: T
  pagination?: any
}
