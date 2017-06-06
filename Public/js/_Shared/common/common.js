var Flash;
(function (Flash) {
    /**
     * [reloadPage 重新加载当前页面]
     */
    function reloadPage() {
        window.location.reload();
    }
    Flash.reloadPage=reloadPage;

    /**
     * [openNewTab 打开新的页面]
     * @param  {string} url [新页面链接]
     * @param  {boolean} isOpenNewTab [是否新开一个tab]
     */
    function openPage(url,isOpenNewTab) {
        if (isOpenNewTab) {
            window.open(url);
        } else {
            window.location.href=url;
        }
        // var baseUrl = "https://";
        // if (isOpenNewTab) {
        //     window.open(`${baseUrl}${url}`);
        // }else {
        //     window.location.href=`${baseUrl}${url}`;
        // }
    }
    Flash.openPage=openPage;
}(Flash||(Flash={})))
