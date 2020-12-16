<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="../../public/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link" scoped>
      <a href="https:www.imooc.com/u/1343480" target="_blank">河畔一角主页</a><span>|</span>
      <a href="https://coding.imooc.com/class/113.html" target="_blank">Vue全栈课程</a><span>|</span>
      <a href="https://coding.imooc.com/class/236.html" target="_blank">React全家桶课程</a><span>|</span>
      <a href="https://coding.imooc.com/class/343.html" target="_blank">微信支付专项课程(H5+小程序+Node+Mongo)</a><span>|</span>
    </div>
    <div class="copyright">© mi.com 京ICP证110507号<span class="domain">mi.futurefe.com</span> 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</div>
  </div>
</template>
<script>
export default {
  name:'nav-footer'
}
</script>
<style lang="scss" scoped>
  .footer{
    height: 234px;
    border-top: 4px solid #ff6600;
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
      img{
        width:53px;
        height: 36px;
        margin-bottom: 31px;
      }
    }
    .footer-link{
      a{
        color:#999999;
        display: inline-block;
      }
      span{
        margin:0 10px;
      }
      margin-bottom: 13px;
    }
    .copyright{
        .domain{
          color: #ff6600;
        }
    }
  }
</style>