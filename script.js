// script.js

document.addEventListener('DOMContentLoaded', function() {
    const breedsSelect = document.getElementById('breeds');
    const generateBtn = document.getElementById('generate-btn');
    const dogImage = document.getElementById('dog-image');

    // 获取所有狗品种并填充下拉菜单
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => {
            for (const breed in data.message) {
                const option = document.createElement('option');
                option.text = breed;
                breedsSelect.add(option);
            }
        });

    // 生成随机狗图片
    generateBtn.addEventListener('click', function() {
        const selectedBreed = breedsSelect.value;
        fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
            .then(response => response.json())
            .then(data => {
                dogImage.src = data.message;
            });
    });
});
