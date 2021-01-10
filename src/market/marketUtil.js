function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export function getUrl() {
  const mobileUrl =
    'http://www.edinomall.com/m2/goods/list.php?kw=%B0%F8%B7%E6%B3%AA%B6%F3%C2%FC%B4%D9%B7%A1';
  const wwwUrl =
    'http://www.edinomall.com/shop/goods/goods_search.php?searched=Y&log=1&skey=all&hid_pr_text=&hid_link_url=&edit=&sword=%B0%F8%B7%E6%B3%AA%B6%F3%C2%FC%B4%D9%B7%A1%B3%F3%C0%E5&x=33&y=27';
  return isMobile() ? mobileUrl : wwwUrl;
}
