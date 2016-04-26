'use strict'

import Vue from 'vue'
import Vuei18n from 'vue-i18n'
import browserLocale from 'browser-locale'
import $ from 'jquery'

Vue.use(Vuei18n)

let locales = {
  en: {
    page: require('./locales/en/page').default,
    speakers: require('./locales/en/speakers').default
  },
  pt: {
    page: require('./locales/pt/page').default,
    speakers: require('./locales/pt/speakers').default
  }
}

// Install locales
Object.keys(locales).forEach((lang) => Vue.locale(lang, locales[lang]))

// Set the locale or fallback to portuguese
if (browserLocale()) {
  let locale = browserLocale().split('-').shift()

  // Check if the locale is supported
  if (['en', 'pt'].includes(locale)) {
    Vue.config.lang = locale
  } else {
    Vue.config.lang = 'pt'
  }
} else {
  Vue.config.lang = 'pt'
}

let vm = new Vue({ // eslint-disable-line no-new
  el: 'body',
  data () {
    return {
      speakers: locales[this.lang()].speakers
    }
  },
  methods: {
    lang () {
      return this.$lang.lang
    },
    modal (id) {
      $(`#${id}`).modal()
    },
    toggleLocale (lang) {
      Vue.config.lang = Vue.config.lang === 'pt' ? 'en' : 'pt'
    }
  }
})

vm.$lang.$watch('lang', (lang) => {

})

