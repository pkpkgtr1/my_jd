/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
  'pt_key=AAJgHU_tADCcx0jKwjvRlI16vF9fetjX8E0OQl6Slg0scvvclCA0M_rawiNkk7kN2ld-aEdeZaU;pt_pin=pkpkgtr1;',//老子的cookie
  'pt_key=AAJgKd7MADCnV_G45HGr0FEgq0T4_jAXVQ4vIPFVc79zmOqMNFBU_POu2QzksKJtbumzClC0Gdo;pt_pin=jd_cvqDMxRUFUms;',//老妈
  'pt_key=AAJgII3jADCUcp_nlb14tHDg7MRlKmwzmHXORMgK8VwdgYqXH9XfqwNmKadtt_XSSvrFCndmuIE;pt_pin=jd_6370e3a6eecc5;',//郝老师
  'pt_key=AAJgH1vgADCJNcudshSscim4J7Y5LeqKhRfkt7GdzhAMp9Rj8zaveUOPFozEus1NVP_LwkROqXo;pt_pin=5642879611;',//陈明
  'pt_key=AAJgH36LADCHuAW9gYd7ElrKeu32k470yUEH9hBxvnnfoa3mFD9DQDTd63LuhjRUn-KEfrNZyr8;pt_pin=illwill;',//吴足青
//  'pt_key=AAJgA42lADBGfZlUeXv0hylimzvAYeMBtX-rGzQkjSKgatMYBS_k3nANjF4nzkKhOenC688f_DM;pt_pin=%E7%B2%A5%E5%AE%9D%E5%AE%9D123;',//周建梁
  'pt_key=AAJgMwhpADBjGS-dGNDdpaFeSuqBM91mgARTe3P_sb3-CQtxCHHAxhd6XGlR_3uzFDli29rBKJ8;pt_pin=jd_67e0d54cb1080;',//昆仑
  'pt_key=AAJgH4BEADB5OPAgU_W98hfbi_mebjFBi4OeJJ49cIvCXzoZv6prxYwhUoLE8-TeiIb9c5PSytA;pt_pin=jd_5c8eb8bf5d36c;',//刘伟
]
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
if (JSON.stringify(process.env).indexOf('GITHUB')>-1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
    await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
    await process.exit(0);
  })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
