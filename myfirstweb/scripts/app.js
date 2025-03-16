document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchBox").value.trim();
    if (query) {
        window.open(`https://www.baidu.com/s?wd=${encodeURIComponent(query)}`, "_blank");
    } else {
        alert("请输入搜索内容！");
    }
});