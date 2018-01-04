import Vue from 'vue'

Vue.directive('editable', {
  bind: function (el, binding) {
    if (typeof binding.value._editable === 'undefined') {
      return
    }

    let options = JSON.parse(binding.value._editable.replace('<!--#storyblok#', '').replace('-->', ''))

    el.setAttribute('data-blok-c', JSON.stringify(options))
    el.setAttribute('data-blok-uid', options.id + '-' + options.uid)
    el.classList.add('storyblok__outline')
  }
})
