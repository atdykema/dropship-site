window.onload = () => {
    const transition = document.querySelector('.transition');
    const anchors = document.querySelectorAll('.home-sliders');

    setTimeout(()=>{
        transition.classList.remove('is-active');
    }, 750)

    for(let i = 0; i < anchors.length; i++){
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;
            transition.classList.add('is-active')

            setTimeout(()=>{
                window.location.href = target;
            }, 750)
        })
    }
}