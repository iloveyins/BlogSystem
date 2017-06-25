var Flash;
(function(Flash) {
    var SimditorUtils;
    (function(SimditorUtils) {
        var toolbar = [
            'title',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'fontScale',
            'color',
            'ol',
            'ul',
            'blockquote',
            'code',
            'table',
            'link',
            'image',
            'hr',
            'indent',
            'outdent',
            'alignment',
            'emoji'
        ];
        SimditorUtils.toolbar = toolbar;

        function setSimditor() {
            var options = {
                textarea: $('#editor'),
                placeholder: '',
                defaultImage: '/Public/images/simditor.png',
                params: {},
                upload: true,
                tabIndent: true,
                toolbar: toolbar,
                toolbarFloat: true,
                toolbarFloatOffset: 0,
                toolbarHidden: false,
                pasteImage: false,
                cleanPaste: false,
                autosavePath: '/',
                emoji: {
                    imagePath: '/Public/images/simditor-emoji/emoji/'
                }
            };
            return (new Simditor(options));
        }

        SimditorUtils.setSimditor = setSimditor;
    }(SimditorUtils = Flash.SimditorUtils || (Flash.SimditorUtils = {})));
}(Flash || (Flash = {})));
