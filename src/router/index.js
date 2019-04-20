import Vue from 'vue'
import Router from 'vue-router'

// Views imports
import Introduction from '../views/Introduction'
import PersonalData from '../views/PersonalData'
import Experience from '../views/Experience'
import Languages from '../views/Languages'
import Portfolio from '../views/Portfolio'
import Certifications from '../views/Certifications'
import Awards from '../views/Awards'
import Knowledges from '../views/Knowledges'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/datos-personales',
      name: 'PersonalData',
      component: PersonalData
    },
    {
      path: '/experiencia',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/idiomas',
      name: 'Languages',
      component: Languages
    },
    {
      path: '/portafolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/certificaciones',
      name: 'Certifications',
      component: Certifications
    },
    {
      path: '/reconocimientos',
      name: 'Awards',
      component: Awards
    },
    {
      path: '/conocimientos',
      name: 'knowledges',
      component: Knowledges
    },
  ]
})