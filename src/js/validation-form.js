document.addEventListener('DOMContentLoaded', () => {
    const inputs = Array.from(document.querySelectorAll('.buy-form__quantity'));

    inputs.forEach(i => i.addEventListener('input', inputListener));

    function inputListener(e) {
        inputs
            .filter(i => i !== e.target)
            .forEach(i => i.required = !e.target.value.length);
    }
});