export default {
    bind(el, bindings) {
        console.log(el, 'el');
        console.log(bindings, 'bindings');
        // 所有权限
        const permissions = JSON.parse(localStorage.getItem('permissions'))
        // 需要的权限（传过来的权限）
        const needPermission = bindings.value
        console.log(permissions, 'permissions');
        console.log(needPermission, 'needPermission');
        // 判断是否有传过来的权限
        const hasPermission = permissions.includes(needPermission)
        console.log(hasPermission, 'hasPermission');

        if (!hasPermission) {
            // 没有传过来的权限操作就隐藏按钮
            el.style.display = 'none'
            // 为了获取按钮dom元素
            setTimeout(() => {
                el.parentNode.removeChild(el)
            }, 0)
        }
    }
}