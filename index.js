onload = () => {
    const roller = Roller()

    roller.initialize()
    roller.on()

    const wrapper = document.querySelector('.wrapper')
    wrapper.addEventListener('mouseover', () => roller.off())
    wrapper.addEventListener('mouseleave', () => roller.on())
}

const Roller = (target = {
    targetWrapperClass: 'wrapper',
    targetItemClass: 'item',
}) => {
    let timers = []

    const {
        targetWrapperClass,
        targetItemClass
    } = target

    const _getWrapperWidth = () => document.querySelector(`.${targetWrapperClass}`).offsetWidth
    const _getItemWidth = () => document.querySelector(`.${targetItemClass}`).offsetWidth
    const _getItemCount = () => Math.ceil(_getWrapperWidth() / _getItemWidth()) + 1;
    const _getPosition = () => _getItemWidth() * (_getItemCount() - 1)

    const initialize = () => {
        let item = document.querySelector(`.${targetItemClass}`);

        for (let i = 1; i <= _getItemCount(); i++) {
            if (i === 1) {
                item.id = `item${i}`
                document.querySelector(`#item${i}`).style.left = '0px';
                continue
            }
            let clone = item.cloneNode(true)
            clone.id = `item${i}`
            document.querySelector(`.${targetWrapperClass}`).appendChild(clone)
            document.querySelector(`#item${i}`).style.left = (_getItemWidth() * (i - 1)) + 'px';
            clone.classList.add('clone');
        }
    }
    const on = () => {
        for (let i = 1; i <= _getItemCount(); i++) {
            timers[i - 1] = setInterval(
                callback,
                parseInt(1000 / 100),
                1,
                document.querySelector(`#item${i}`)
            )
        }

        function callback(d, item) {
            let left = parseInt(item.style.left);
            item.style.left = (left - d) + 'px'; //이동
            if (_getItemWidth() + (left - d) <= 0) {
                item.style.left = _getPosition() + 'px';
            }
        }
    }

    const off = () => timers.forEach(v => clearInterval(v))

    return {
        initialize,
        on,
        off,
    }
}