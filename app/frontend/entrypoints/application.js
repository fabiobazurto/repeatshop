// To see this message, add the following to the `<head>` section in your
// views/layouts/application.html.erb
//
//    <%= vite_client_tag %>
//    <%= vite_javascript_tag 'application' %>
// console.log('Vite ⚡️ Rails')

// If using a TypeScript entrypoint file:
//     <%= vite_typescript_tag 'application' %>
//
// If you want to use .jsx or .tsx, add the extension:
//     <%= vite_javascript_tag 'application.jsx' %>

// console.log('Visit the guide for more information: ', 'https://vite-ruby.netlify.app/guide/rails')

import 'virtual:windi.css'
import '../css/application.css'
import 'virtual:windi-devtools'

// Example: Load Rails libraries in Vite.
//
import Rails from '@rails/ujs'
Rails.start()
//
// import Turbolinks from 'turbolinks'
// import ActiveStorage from '@rails/activestorage'
//
// // Import all channels.
// import.meta.globEager('./**/*_channel.js')
//
// Turbolinks.start()
// ActiveStorage.start()

// Example: Import a stylesheet in app/frontend/index.css
// import '~/index.css'

import Alpine from 'alpinejs';

window.Alpine = Alpine
Alpine.start()


window.POS = window.POS || {};

// Load all react components and instantiate them on page load
const components = import.meta.globEager('../components/**/*.jsx')

window.POS.ReactComponents = {}

Object.keys(components).forEach((path) => {
  let componentName = path.substr(path.lastIndexOf('/') + 1) // filename
  componentName =  componentName.substr(0, componentName.lastIndexOf('.')); // strip extension

  window.POS.ReactComponents[componentName] = components[path].default;
});

import React from "react"
import ReactDOM from "react-dom"

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll("[data-react-component]").forEach((element) => {
    const Component = window.POS.ReactComponents[element.getAttribute('data-react-component')];
    const props = JSON.parse(element.getAttribute('data-react-props'))

    ReactDOM.render(
      React.createElement(Component, props),
      element
    );
  });
})


