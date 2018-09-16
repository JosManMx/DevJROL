// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const profile = {
  template:
    `<section class="profile">
  <div class="row">
    <h3>Perfil</h3>
    <p class="description"> Teniendo una motivación previa diseñando plantillas HTML y CSS con Macromedia
      Dreamweaver en el año 2005 y con el Sistema de Gestion de Contenido (CMS) WordPress; inicié mis
      estudios informales y autodidactas en el area del desarrollo web, para posteriormente centrarme en el
      ámbito frontend desde el año 2013, ya al día de hoy manejo diversos frameworks para maquetacion y
      desarrollo visual en aplicaciones, correos y paginas web, asi como tambien librerias de codigo. </p>
    <p class="description">Considero que siempre hay mas de una forma para realizar un objetivo, por lo que
      he tomado como norte elaborar y/o investigar la opción más óptima y profesional, eso me ha llevado a
      un
      ámplio hábito de la investigación y ha hecho que mis conocimientos sean integrales y mis practicas de
      codificacion cada vez más límpias.</p>
    <p class="description">Soy amante de las diversas tecnologías y amo mis labores profesionales
      tomandolas
      muy en serio, aplicando las metodologías mas flexibles y óptimas, garantizando que pueda trabajar en
      equipos multidiciplinarios con un fin claro. </p>
    <p class="description">Una de los principales aprendizaje que he tenido trabajando como freelance es
      que
      la responsabilidad es tu marca personal y la perseverancia la mejor herramienta. Me gustan los
      proyectos arriesgados por que recuerdan que siempre hay algo nuevo que aprender.</p>
  </div>
</section>`
}
const personalData = {
  template: `<section class="data">
  <div class="row">
    <h3>Datos Personales</h3>
  </div>
  <div class="row">
    <table>
      <tr>
        <th>Nombres:</th>
        <td>Jose Rafael</td>
      </tr>
      <tr>
        <th>Apellidos: </th>
        <td>Otero López</td>
      </tr>
      <tr>
        <th>C.I.: </th>
        <td>V-19.708.947</td>
      </tr>
      <tr>
        <th>Nacionalidad: </th>
        <td>Venezolano</td>
      </tr>
      <tr>
        <th>Estado Civil:</th>
        <td>Casado</td>
      </tr>
      <tr>
        <th>Edad:</th>
        <td>25 Años</td>
      </tr>
      <tr>
        <th>Fecha de Nacimiento: </th>
        <td>21 Agosto de 1991</td>
      </tr>
      <tr>
        <th>Telefonos: </th>
        <td>+58 0251 - 417.73.97</td>
      </tr>
    </table>
  </div>
  </section>`
}
const experience = {
  template: `
  <section class="experience">
              <div class="row">
                <h3>Experiencia Laboral</h3>
              </div>
              <div class="row">
                <table>
                  <tr>
                    <th class="text-center text-title" colspan="2">Oteroweb</th>
                  </tr>
                  <tr>
                    <th>Organización o Empresa:</th>
                    <td> <a href="http://www.oteroweb.com.ve">Oteroweb.com.ve</a></td>
                  </tr>
                  <tr>
                    <th>Puesto o Cargo: </th>
                    <td>Desarrollador Web Front-end</td>
                  </tr>
                  <tr>
                    <th>Periodo:</th>
                    <td>Diciembre, 2015 - Actualmente</td>
                  </tr>
                </table>
              </div>
            </section>`
}
const knowledge = {
  template: `
<section class="knowledge">
              <div class="row">
                <h3>Conocimientos</h3>
              </div>
              <div class="row">
                <ul class="knowlegde-list-a">
                  <li>Maquetado con HTML/CSS</li>
                  <li>Desarrollo de Plantillas en Email Marketing</li>
                  <li>Uso de Preprocesadores de lenguajes</li>
                  <ul>
                    <li>Jade/pug </li>
                    <li>SCSS/SASS</li>
                    <li>LESS</li>
                  </ul>
                  <li>Lenguajes de programación</li>
                  <ul>
                    <li>PHP</li>
                    <li>Javascript</li>
                  </ul>
                  <li>Librerías</li>
                  <ul>
                    <li>Jquery</li>
                    <li>AJAX</li>
                    <li>HammerJS</li>
                  </ul>
                  <li>Frameworks</li>
                  <ul>
                    <li>Bootstrap</li>
                    <li>MaterializeCSS</li>
                    <li>Vue</li>
                    <li>Foundation (Webs)</li>
                    <li>Material Design Lite MDL)</li>
                    <li>EDgrid</li>
                    <li>VueMaterial</li>
                    <li>MJML</li>
                    <li>Foundation (Email)</li>
                  </ul>
                </ul>
                <ul class="knowlegde-list-a">
                  <li>Manejo de CMS</li>
                  <ul>
                    <li>Wordpress
                      <ul>
                        <li>WooCommerce</li>
                      </ul>
                    </li>
                    <li>Drupal</li>
                    <li>Joomla</li>
                    <li>Magento</li>
                    <li>OpenCart</li>
                    <li>OsCommerce</li>
                  </ul>
                  <li>Posicionamiento en Buscador (SEO)</li>
                  <li>Interface de Usuario (UI)</li>
                  <li>Experiencia de Usuario (UX)</li>
                  <li>Base de Datos con MySQL</li>
                  <li>Control de Versiones
                    <ul>
                      <li>Git</li>
                      <li>BitBucket</li>
                    </ul>
                  </li>
                  <li>Manejo de Software
                    <ul>
                      <li>Photoshop</li>
                      <li>Corel Draw</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>
`
}
const lang = {
  template: `<section class="lang">
   <div class="row">
     <h3>Lenguajes</h3>
   </div>
   <div class="row">
     <ul>
       <li>Español 99%</li>
       <li>Ingles 75%</li>
     </ul>
   </div>
 </section>`
}
const expertise = {
  template: `<section class="expertise">
  <div class="row">
    <h3>Destreza/Expertise</h3>
  </div>
  <div class="row">
    <ul>
      <li>Amplios conocimientos sobre redacción de contenidos debido a que soy escritor literario por
        hobby.
        <br> </br></li>
      <li>Búsqueda de Contenido en la web; teniendo experiencia de más de 15 años de manejo en internet<br>
        </br></li>
      <li>Alta velocidad de transcripción 56PPM (Palabra Por Minuto) y 426CPM (Caracteres Por Minuto)<br>
        </br></li>
      <li>Dominio en el Manejo de Sistemas Operativos como Linux y Windows<br> </br></li>
      <li>Autodidacta, dinámico, proactivo, organizado y responsable.<br> </br></li>
    </ul>
  </div>
</section>`
}
const portfolio = {
  template: `<section class="portfolio">
  <div class="row">
    <h3>Portafolio</h3>
  </div>
  <div class="row">
    <!-- PORTFOLIO ITEM-->
    <div class="portfolio_item">
      <div class="portfolio_div_img"><img class="portfolio_img" src="img/email_templ.jpg"></div>
      <table class="portfolio_description">
        <tr>
          <th class="text-center text-title" colspan="2">Plantilla Email Marketing</th>
        </tr>
        <tr>
          <th>Fecha:</th>
          <td>Octubre, 2016</td>
        </tr>
        <tr>
          <th>Tecnologias Usadas:</th>
          <td>MJML Framework, HTML, CSS.</td>
        </tr>
        <tr>
          <th>URL:</th>
          <td> <a href="https://josmanmx.github.io/perros/">Ir</a></td>
        </tr>
      </table>
    </div>
    <!-- PORTFOLIO ITEM-->
    <div class="portfolio_item">
      <div class="portfolio_div_img"><img class="portfolio_img" src="img/urbe.jpg"></div>
      <table class="portfolio_description">
        <tr>
          <th class="text-center text-title" colspan="2">Desarrollo Tema Wordpress: Urbe Arquitectura</th>
        </tr>
        <tr>
          <th>Fecha:</th>
          <td>Noviembre, 2016</td>
        </tr>
        <tr>
          <th>Tecnologias Usadas:</th>
          <td>Wordpress, Bootstrap.</td>
        </tr>
        <tr>
          <th>URL:</th>
          <td> <a href="http://urbe.pw/">Ir</a></td>
        </tr>
      </table>
    </div>
    <!-- PORTFOLIO ITEM-->
    <div class="portfolio_item">
      <div class="portfolio_div_img"><img class="portfolio_img" src="img/dailybitspro.png"></div>
      <table class="portfolio_description">
        <tr>
          <th class="text-center text-title" colspan="2">Desarrollo completo del Front-End en DailyBitsPro</th>
        </tr>
        <tr>
          <th>Fecha:</th>
          <td>Enero, 2017</td>
        </tr>
        <tr>
          <th>Tecnologias Usadas:</th>
          <td>Lavavel, Bootstrap, Blade.</td>
        </tr>
        <tr>
          <th>URL:</th>
          <td> <a href="http://www.dailybitspro.com/">Ir</a></td>
        </tr>
      </table>
    </div>
  </div>
</section>`
}
const reference = {
  template: `<section class="reference">
   <div class="row">
     <h3>Referencias Personales</h3>
   </div>
   <div class="row">
     <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, ex rerum
       explicabo. Aliquam aperiam quisquam laudantium neque, aspernatur atque maxime possimus. Voluptatem
       suscipit voluptas adipisci nesciunt, sed perferendis aliquam quidem?</p>
   </div>
 </section>`
}
const certification = {
  template: `<section class="certification">
  <div class="row">
    <h3>Certificaciones / Cursos / Talleres</h3>
  </div>
  <div class="row">
    <table>
      <tr>
        <th class="text-center text-title" colspan="2">Conectando el futuro con Fibra Óptica</th>
      </tr>
      <tr>
        <th>Emisor(a) de la certificación</th>
        <td> <a href="https://www.telefonica.com/es">Telefónica</a></td>
      </tr>
      <tr>
        <th>URL del certificado</th>
        <td> <a href="https://miriadax.net/files/10132/badge/a2299d45-a608-4e66-b584-bf08b4c520a6.pdf">Ir</a></td>
      </tr>
    </table>
    <table>
      <tr>
        <th class="text-center text-title" colspan="2">Desarrollo en HTML5, CSS y Javascript de WebApps,
          incl. móviles FirefoxOS* (4.ª ed.)</th>
      </tr>
      <tr>
        <th>Emisor(a) de la certificación</th>
        <td> <a href="http://www.upm.es/">Universidad Politécnica de Madrid</a></td>
      </tr>
      <tr>
        <th>URL del certificado</th>
        <td> <a href="https://miriadax.net/files/10132/badge/f69778bd-ed5d-457b-8b60-d80230df901f.pdf">Ir</a></td>
      </tr>
    </table>
    <table>
      <tr>
        <th class="text-center text-title" colspan="2">Reparador de celulares y tablets</th>
      </tr>
      <tr>
        <th>Emisor(a) de la certificación</th>
        <td> <a href="http://fundacioncarlosslim.org/">Fundacion Carlos Slim</a></td>
      </tr>
      <tr>
        <th>URL del certificado</th>
        <td> <a href="https://capacitateparaelempleo.org/verifica/gf3fm8avn/">Ir</a></td>
      </tr>
    </table>
    <table>
      <tr>
        <th class="text-center text-title" colspan="2">Introducción a Python</th>
      </tr>
      <tr>
        <th>Emisor(a) de la certificación</th>
        <td> <a href="https://www.academiaeset.com/">ESET Latinoamérica</a></td>
      </tr>
      <tr>
        <th>URL del certificado</th>
        <td> <a href="https://goo.gl/g8V1KX">Ir</a></td>
      </tr>
    </table>
    <table>
      <tr>
        <th class="text-center text-title" colspan="2">Seguridad en dispositivos móviles</th>
      </tr>
      <tr>
        <th>Emisor(a) de la certificación</th>
        <td> <a href="https://www.academiaeset.com/">ESET Latinoamérica</a></td>
      </tr>
      <tr>
        <th>URL del certificado</th>
        <td> <a href="https://goo.gl/MPKEIU">Ir</a></td>
      </tr>
    </table>
    <table>
      <tr>
        <th class="text-center text-title" colspan="2">ESET Mobile Security para Android</th>
      </tr>
      <tr>
        <th>Emisor(a) de la certificación</th>
        <td> <a href="https://www.academiaeset.com/">ESET Latinoamérica</a></td>
      </tr>
      <tr>
        <th>URL del certificado</th>
        <td> <a href="https://goo.gl/DUxpMx">Ir</a></td>
      </tr>
    </table>
    <table>
      <tr>
        <th class="text-center text-title" colspan="2">Gestión y respuesta de incidentes</th>
      </tr>
      <tr>
        <th>Emisor(a) de la certificación</th>
        <td> <a href="https://www.academiaeset.com/">ESET Latinoamérica</a></td>
      </tr>
      <tr>
        <th>URL del certificado</th>
        <td> <a href="https://goo.gl/vSwVLM">Ir</a></td>
      </tr>
    </table>
    <table>
      <tr>
        <th class="text-center text-title" colspan="2">Especialista en Seguridad de la Información
          Corporativa</th>
      </tr>
      <tr>
        <th>Emisor(a) de la certificación</th>
        <td> <a href="https://www.academiaeset.com/">ESET Latinoamérica</a></td>
      </tr>
      <tr>
        <th>URL del certificado</th>
        <td> <a href="https://goo.gl/bMqQ4c">Ir</a></td>
      </tr>
    </table>
    <table>
      <tr>
        <th class="text-center text-title" colspan="2">Seguridad para PyMEs</th>
      </tr>
      <tr>
        <th>Emisor(a) de la certificación</th>
        <td> <a href="https://www.academiaeset.com/">ESET Latinoamérica</a></td>
      </tr>
      <tr>
        <th>URL del certificado</th>
        <td> <a href="https://goo.gl/qJgiXs">Ir</a></td>
      </tr>
    </table>
    <table>
      <tr>
        <th class="text-center text-title" colspan="2">Introducción a las instalaciones eléctricas</th>
      </tr>
      <tr>
        <th>Emisor(a) de la certificación</th>
        <td> <a href="http://www.upn.edu.pe/es">Universidad Privada del Norte (UPN)</a></td>
      </tr>
      <tr>
        <th>URL del certificado</th>
        <td> <a href="https://miriadax.net/files/10132/badge/3fbb553e-d726-4061-859b-453ec53cfc9c.pdf">Ir</a></td>
      </tr>
    </table>
    <table>
      <tr>
        <th class="text-center text-title" colspan="2">Diseño, Organización y Evaluación de videojuegos y
          gamificación (3.ª edición)</th>
      </tr>
      <tr>
        <th>Emisor(a) de la certificación</th>
        <td> <a href="http://universidadeuropea.es/">Universidad Europea</a></td>
      </tr>
      <tr>
        <th>URL del certificado</th>
        <td> <a href="https://miriadax.net/files/10132/badge/d8246398-897c-4c2c-b4a6-8afdffa3ab59.pdf">Ir</a></td>
      </tr>
    </table>
    <table>
      <tr>
        <th class="text-center text-title" colspan="2">WordPress, el comienzo</th>
      </tr>
      <tr>
        <th>Emisor(a) de la certificación</th>
        <td> <a href="https://www.acamica.com/">Acamica</a></td>
      </tr>
      <tr>
        <th>URL del certificado</th>
        <td> <a href="https://www.acamica.com/cert/4279392f78c86501333cdb51b4e00407b725f9b8">Ir</a></td>
      </tr>
    </table>
    <table>
      <tr>
        <th class="text-center text-title" colspan="2">Desarrollo en HTML5, CSS y Javascript de Apps Web,
          Android, IOS... (6.ª ed.)</th>
      </tr>
      <tr>
        <th>Emisor(a) de la certificación</th>
        <td> <a href="http://www.upm.es/">Universidad Politécnica de Madrid</a></td>
      </tr>
      <tr>
        <th>URL del certificado</th>
        <td> <a href="https://miriadax.net/files/10132/badge/8d82022a-2398-4d72-94bf-02993b187123.pdf">Ir</a></td>
      </tr>
    </table>
    <table>
      <tr>
        <th class="text-center text-title" colspan="2">WordPress Certification</th>
      </tr>
      <tr>
        <th>Emisor(a) de la certificación</th>
        <td> <a href="http://www.TemplateMonster.com">TemplateMonster.com</a></td>
      </tr>
      <tr>
        <th>URL del certificado</th>
        <td> <a href="https://www.credential.net/yulh7s5t">Ir</a></td>
      </tr>
    </table>
    <table>
      <tr>
        <th class="text-center text-title" colspan="2">Desarrollo en HTML5, CSS y Javascript de Apps Web,
          Android, IOS... (6.ª ed.)</th>
      </tr>
      <tr>
        <th>Emisor(a) de la certificación</th>
        <td> <a href="http://www.upm.es/">Universidad Politécnica de Madrid</a></td>
      </tr>
      <tr>
        <th>URL del certificado</th>
        <td> <a href="https://miriadax.net/files/10132/badge/8d82022a-2398-4d72-94bf-02993b187123.pdf">Ir</a></td>
      </tr>
    </table>
  </div>
</section>`
}
const NotFound = { template: 'Error #404: Página no existe.' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: profile },
  { path: '/datos-personales', component: personalData },
  { path: '/experiencia', component: experience },
  { path: '/conocimientos', component: knowledge },
  { path: '/idiomas', component: lang },
  { path: '/expertise', component: expertise },
  { path: '/portafolio', component: portfolio },
  { path: '/reference', component: reference },
  { path: '/certificaciones', component: certification },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.

/*const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    VueView() {
      return routes[this.currentRoute] || NotFound
    }
  },
  render(h) {
    return (h) {
      return h(this.VueView)
    }
  }
});*/


const app = new Vue({
  router
}).$mount('#app');


// Now the app has started!





