const wrapper = document.querySelector('.wrapper');

const getColor = () => {
    return `#${Math.random().toString(16).slice(2, 8)}`
};

const generateBlocks = () => {
    for (let i = 1; i <= 25; i++){
        const block = document.createElement('div')
        block.classList.add('block')
        wrapper.prepend(block)
        block.style.backgroundColor = getColor()
    };
};
const changeBlocksColor = () => {
    setInterval(() => {
        wrapper.innerHTML = ''
        generateBlocks()}, 1000);
    
}
changeBlocksColor ();