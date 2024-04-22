;(function () {
  function navegarViaAjax(hash) {
    if (!hash) return

    const link = document.querySelector(`[wm-link='${hash}']`)
    if (!link) return

    const destiny = document.querySelector("[wm-link-destiny]")

    const url = hash.substring(1)
    fetch(url)
      .then(resp => resp.text())
      .then(html => {
        destiny.innerHTML = html
      })
  }

  function configurarLinks() {
    document.querySelectorAll("[wm-link]").forEach(link => {
      link.href = link.attributes["wm-link"].value
    })
  }

  function navegacaoInicial() {
    if (location.hash) {
      navegarViaAjax(location.hash)
    } else {
      const primeiroLink = document.querySelector("[wm-link]")
      navegarViaAjax(primeiroLink.hash)
    }
  }

  window.onhashchange = e => navegarViaAjax(location.hash)

  configurarLinks()
  navegacaoInicial()
})()
