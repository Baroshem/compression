import lozad from 'lozad'
import { defineNuxtPlugin, NuxtApp } from '#app'

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  nuxtApp.provide('lazyLoad', lozad)
})
