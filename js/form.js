const $form = document.querySelector('.contact-form')
const $submitBtn = document.querySelector('#submitBtn')
const email = 'manuelantonior46@gmail.com'

$form.addEventListener('submit', async (e) => {
    e.preventDefault()

    console.log('i\'m here')

    $submitBtn.disabled = true
    $submitBtn.innerHTML = `<div class="spinner"></div>
                    <span class="submit-text">Enviando...</span>`
    // $form.submit()

    const data = JSON.stringify(Object.fromEntries(new FormData(e.target).entries()))

    console.log(data)

    try {
        const response = await fetch(`https://formsubmit.co/${email}`, {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        
        const result = await response.json()

        setTimeout(() => {
            $submitBtn.disabled = false
            $submitBtn.innerHTML = `<span class="submit-text">Enviado</span>`
        }, 1000)

        console.log(result)
    } catch (error) {
        console.log(error)
    }

    setTimeout(() => {
        $submitBtn.disabled = false
        $submitBtn.innerHTML = `<span class="submit-text">Enviar</span>`
    }, 4000)
})

