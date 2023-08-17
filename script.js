// 获取所有菜单按钮和内容部分
const menuButtons = document.querySelectorAll('.menu-button');
const contentSections = document.querySelectorAll('.content');

// 初始化：显示默认内容（content1）并隐藏其他内容
document.getElementById('content1').style.display = 'block';
contentSections.forEach(section => {
    if (section.id !== 'content1') {
        section.style.display = 'none';
    }
});

// 为菜单按钮添加点击事件处理程序
menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetContent = button.getAttribute('data-content');
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(targetContent).style.display = 'block';
    });
});
