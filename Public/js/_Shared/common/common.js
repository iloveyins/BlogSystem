var Flash;
(function(Flash) {
    /**
     * [reloadPage 重新加载当前页面]
     */
    function reloadPage() {
        window.location.reload();
    }
    Flash.reloadPage = reloadPage;

    /**
     * [openNewTab 打开新的页面]
     * @param  {string} url [新页面链接]
     * @param  {boolean} isOpenNewTab [是否新开一个tab]
     */
    function openPage(url, isOpenNewTab) {
        if (isOpenNewTab) {
            window.open(url);
        } else {
            window.location.href = url;
        }
    }
    Flash.openPage = openPage;

    /**
     * [showSuccesseInfo description]
     * @param  {Object} options [description]
     * @return {[type]}         [description]
     */
    function showSuccesseInfo(options) {
        var message = '',
            text = '操作成功',
            title = '操作成功';
        if (options) {
            var href = options.href || '#';
            title = options.title || title;
            text = options.text || text;
            if (options.hrefInfos) {
                var hrefInfos = options.hrefInfos;
                var ele_a = '';
                for (var item of hrefInfos) {
                    ele_a = `<a href="${item.href || '#'}" class="alert-link">
                                 ${item.text}
                             </a>`
                    text = text.replace(item.text, ele_a);
                }
            }
            message = `<div class="alert alert-success alert-dismissible message" role="alert">
                           <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                               <span aria-hidden="true">&times;</span>
                           </button>
                           <strong>${title}</strong>
                           ${text}
                       </div>`;
        } else {
            message = `<div class="alert alert-success alert-dismissible message" role="alert">
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                           </button>
                           <strong>${title}</strong>
                       </div>`;
        }
        var firstElement = $('body').children()[0];
        var className = $(firstElement).attr('class');
        $(message).insertBefore(`.${className}`);
        setTimeout(function() {
            $('[data-dismiss="alert"]').alert('close');
        }, 3000);
    }
    Flash.showSuccesseInfo = showSuccesseInfo;
}(Flash || (Flash = {})))
