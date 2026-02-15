const $form = document.querySelector('.contact-form')
const $submitBtn = document.querySelector('#submitBtn')
const $formSuccess = document.querySelector('.form-success')
const email = 'manuelantonior46@gmail.com'

$form.addEventListener('submit', async (e) => {
    e.preventDefault()

    $submitBtn.disabled = true
    $submitBtn.innerHTML = `<div class="spinner"></div>
                    <span class="submit-text">Enviando...</span>`

    const data = JSON.stringify(Object.fromEntries(new FormData(e.target).entries()))

    try {
        await fetch(`https://formsubmit.co/${email}`, {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        setTimeout(() => {
            $submitBtn.disabled = false
            $submitBtn.innerHTML = `<span class="submit-text">Enviado</span>`
            $formSuccess.innerHTML = `<h2>Gracias por tu mensaje</h2>
                <p>Te contactaremos pronto</p>`
            $formSuccess.classList.add('active')
            $form.reset()
        }, 1000)

    } catch (error) {
        $formSuccess.innerHTML = `<h2>Gracias por tu mensaje</h2>
                <p>Te contactaremos pronto</p>`
        $formSuccess.classList.add('active')
    }

    setTimeout(() => {
        $submitBtn.disabled = false
        $submitBtn.innerHTML = `<span class="submit-text">Enviar</span>`
        $formSuccess.classList.remove('active')
    }, 4000)
})

