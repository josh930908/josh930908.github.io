(function(){"use strict";var e={9134:function(e,t,o){var n=o(9963),l=o(6252);function r(e,t,o,n,r,a){const s=(0,l.up)("NavBar"),u=(0,l.up)("router-view"),i=(0,l.up)("PageFoot");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(s),(0,l.Wm)(u),(0,l.Wm)(i)])}var a=o.p+"img/YLSHlogo.764c1632.gif";const s=e=>((0,l.dD)("data-v-b3925924"),e=e(),(0,l.Cn)(),e),u=s((()=>(0,l._)("img",{src:a,width:"30",class:"d-inline-block align-top",alt:"vue_icon"},null,-1)));function i(e,t,o,n,r,a){const s=(0,l.up)("b-navbar-toggle"),i=(0,l.up)("b-navbar-brand"),m=(0,l.up)("router-link"),d=(0,l.up)("b-nav-item"),c=(0,l.up)("b-navbar-nav"),p=(0,l.up)("b-dropdown-item"),f=(0,l.up)("b-nav-item-dropdown"),h=(0,l.up)("b-collapse"),g=(0,l.up)("b-navbar");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(g,{toggleable:"lg",type:"dark",variant:"info"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{target:"nav_collapse"}),(0,l.Wm)(i,{class:"mr-5"},{default:(0,l.w5)((()=>[u,(0,l.Uk)(" 宜蘭高中自學平台 ")])),_:1}),(0,l.Wm)(h,{"is-nav":"",id:"nav_collapse"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{to:"/",exact:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Home")])),_:1})])),_:1}),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{to:"/blogs",exact:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Posts")])),_:1})])),_:1}),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{to:"/about",exact:""},{default:(0,l.w5)((()=>[(0,l.Uk)("About")])),_:1})])),_:1}),(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{to:"/test",exact:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Test")])),_:1})])),_:1})])),_:1}),(0,l.Wm)(c,{class:"ml-auto"},{default:(0,l.w5)((()=>[0==this.$store.getters.getLogin?((0,l.wg)(),(0,l.j4)(d,{key:0},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{to:"/login",style:{color:"black"}},{default:(0,l.w5)((()=>[(0,l.Uk)("登入")])),_:1})])),_:1})):(0,l.kq)("",!0),0==this.$store.getters.getLogin?((0,l.wg)(),(0,l.j4)(d,{key:1},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{to:"/register",style:{color:"black"}},{default:(0,l.w5)((()=>[(0,l.Uk)("註冊")])),_:1})])),_:1})):(0,l.kq)("",!0),1==this.$store.getters.getLogin?((0,l.wg)(),(0,l.j4)(f,{key:2,text:a.getName,right:""},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{href:"#"},{default:(0,l.w5)((()=>[(0,l.Uk)("Account")])),_:1}),(0,l.Wm)(p,{href:"#"},{default:(0,l.w5)((()=>[(0,l.Uk)("Settings")])),_:1}),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{to:"/addPage",style:{color:"black"}},{default:(0,l.w5)((()=>[(0,l.Uk)("Add Blog")])),_:1})])),_:1}),(0,l.Wm)(p,{onClick:a.logout},{default:(0,l.w5)((()=>[(0,l.Uk)("Logout")])),_:1},8,["onClick"])])),_:1},8,["text"])):(0,l.kq)("",!0)])),_:1})])),_:1})])),_:1})])}var m={methods:{toggleNavbar(){const e=document.querySelector(".navbar");e.classList.toggle("open")},logout(){this.$store.dispatch("setLogin",!1)}},computed:{getName(){return this.$store.getters.getName}}},d=o(3744);const c=(0,d.Z)(m,[["render",i],["__scopeId","data-v-b3925924"]]);var p=c,f=o(3577);const h={class:"footer"},g={class:"container"},b={class:"text-muted"},w=(0,l._)("span",{class:"text-muted right"},"版本日期：2023/04/16",-1);function _(e,t){return(0,l.wg)(),(0,l.iD)("footer",h,[(0,l._)("div",g,[(0,l._)("span",b,(0,f.zw)((new Date).getFullYear())+" © 宜蘭高中自學平台",1),w])])}const v={},y=(0,d.Z)(v,[["render",_]]);var k=y,U={name:"App",components:{NavBar:p,PageFoot:k}};const x=(0,d.Z)(U,[["render",r]]);var S=x,W=o(3340),V=o(2201);const j={class:""},T=(0,l._)("li",null,"寫登出頁面",-1),D=(0,l._)("li",null,"設定好登入登出的系統",-1),N=(0,l._)("li",null,"設定各科首頁",-1),P=(0,l._)("li",null,"其他網站優化",-1),L=(0,l._)("h3",null,"以下為重大更新",-1),Z=(0,l._)("br",null,null,-1),z=(0,l._)("b",null,"已經支援影片嵌入",-1),C=(0,l._)("a",{href:"https://josh930908.github.io/web/#/show/2023-04-16T02:48:42.000Z"},"這篇文章",-1),O=(0,l._)("br",null,null,-1),q=(0,l._)("br",null,null,-1),F=(0,l._)("br",null,null,-1),$=(0,l._)("br",null,null,-1),M=(0,l._)("br",null,null,-1),G=(0,l._)("br",null,null,-1),A=(0,l._)("br",null,null,-1),E=(0,l._)("a",{href:"mailto:s910466@gapp.ylsh.ilc.edu.tw"},"來函",-1);function K(e,t,o,n,r,a){const s=(0,l.up)("b-card-text"),u=(0,l.up)("b-card");return(0,l.wg)(),(0,l.iD)("div",j,[(0,l.Wm)(u,{title:"Welcome","sub-title":"歡迎光臨宜中自學平台",style:{"max-width":"20rem"},"align-h":"center"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" 代辦事項： "),T,D,N,P])),_:1})])),_:1}),L,(0,l.Uk)(" 時間：20230503 "),Z,(0,l.Uk)(" 終於把基礎設定好了，但是目前的網站"),z,(0,l.Uk)("，詳細的說明請參考"),C,O,(0,l.Uk)(" 文章頁面已經穩定了，使用Google Sheet當作資料庫，因此讀取時間有點長（大概4-5秒），但是這樣不用錢"),q,(0,l.Uk)(" 目前每個人都可以新增文章，但是還沒有編輯文章的功能 "),F,(0,l.Uk)(" 使用說明："),$,(0,l.Uk)(" 1.若要查看文章，請點選導航列的Posts"),M,(0,l.Uk)(" 2.若要新增文章，請點選導航列的User選單，再點選User下的Add Blog"),G,(0,l.Uk)(" 3.註冊功能以及登入功能也完善了（只是目前還沒有設定登入後會有的權限...） Have Fun~"),A,(0,l.Uk)(" 如若有任何錯誤建議等等還請"),E])}var H={};const B=(0,d.Z)(H,[["render",K]]);var I=B;const J=(0,l._)("h2",null,"These are my blogs",-1),Q={class:"table table-striped table-hover"},R=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{scope:"col"},"標題"),(0,l._)("th",{scope:"col"},"作者"),(0,l._)("th",{scrpe:"col"},"摘要"),(0,l._)("th",{scrpe:"col"},"全文連結")])],-1),X=["onClick"];function Y(e,t,o,n,r,a){const s=(0,l.up)("b-col"),u=(0,l.up)("b-row"),i=(0,l.up)("b-container");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{class:"m-5 text-center"},{default:(0,l.w5)((()=>[J])),_:1}),(0,l.Wm)(u,{"align-h":"center",class:"m-3"},{default:(0,l.w5)((()=>[(0,l._)("table",Q,[R,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.rows,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.timestamp},[(0,l._)("td",null,(0,f.zw)(e.title),1),(0,l._)("td",null,(0,f.zw)(e.author),1),(0,l._)("td",null,(0,f.zw)(e.summary),1),(0,l._)("td",null,[(0,l._)("button",{onClick:t=>a.redir(e.time)},"查看全文",8,X)])])))),128))])])])),_:1})])),_:1})])}o(7658);var ee=o(6154),te={data(){return{headers:[],rows:[]}},mounted(){ee.Z.get("https://script.google.com/macros/s/AKfycbxd9TQCEQ-PiVCj2zSN-TLGxw-GB2l4ppf1GcdKhS0yxRMr-PqWeqOtrkzwRWqoj1Q3/exec").then((e=>{this.headers=Object.keys(e.data[0]),this.rows=e.data})).catch((e=>{console.log(e)}))},methods:{redir(e){this.$router.push("/show/"+e)}}};const oe=(0,d.Z)(te,[["render",Y]]);var ne=oe;const le=e=>((0,l.dD)("data-v-ac87923c"),e=e(),(0,l.Cn)(),e),re={class:"container"},ae=le((()=>(0,l._)("h2",null,"關於本站",-1))),se=le((()=>(0,l._)("br",null,null,-1))),ue=le((()=>(0,l._)("br",null,null,-1)));function ie(e,t,o,n,r,a){const s=(0,l.up)("b-col"),u=(0,l.up)("v-md-editor");return(0,l.wg)(),(0,l.iD)("div",re,[(0,l.Wm)(s,{class:"m-5 text-center"},{default:(0,l.w5)((()=>[ae])),_:1}),(0,l.Wm)(u,{modelValue:this.text,"onUpdate:modelValue":t[0]||(t[0]=e=>this.text=e),mode:"preview"},null,8,["modelValue"]),se,(0,l.Uk)(),ue])}var me={data(){return{text:"\n## 關於\n\n努力了好久，終於成功了。\n\n在高二時我一直有個想法，就這樣高中畢業過個幾屆自己就會像是那些回來演講的大學長，後代的學弟幾乎都不認識。因此我想要給宜中留下些什麼。適逢當時學習化學時遇到瓶頸，上網查到的資料參差，因此我想建立一個「宜中自學平台」讓後面的學弟妹少走一些彎路。\n\n一所學校的底蘊在哪？宜中跟建北等名校差在哪？答案是學生。或許名校的老師有較為特殊的風格或是較為豐富的經驗，但同考到教師証，老師們的品質絕不會和其他高中差太多。再者，老師再強若學生能力不足，能傳授的知識亦有限。若想改變一所學校，何不從學生開始著手？\n\n當年我是這麼聽國中老師（50多歲的宜中大學長）評價宜蘭的兩所學校的：羅高的普通班資質比宜中更強，但宜中的資優班又領先蘿高一大截。白話來說，兩所學校的平均其實是差不多，但是宜中的標準差比較大。這也是我選擇離家較遠的宜中的原因，我想要得到更多的資源。\n\n既然如此，何不讓宜中最頂尖的學生拉普通班一把呢？\n\n為節省通勤時間，從高二起我開始住校。高二時的室友是體育班的學弟，課內成績對他們而言固然重要，但也沒有到不可或缺的地步。高三上的室友是幾個普通班的學生，成績皆在年級的中後段，是連前段班都進不了。其中一個數學模擬考僅有3級分，大概我寫完單選成績都有機會比他高。\n\n從我住進去開始，我就帶著他們一起努力，他們的成績也變得更好，到了學測，原本數學僅有3級分的同學進步到了9級。僅我一人便能有這種效果，假使宜中所有前端班一起努力，能否令宜中有朝一日，成為全台公認的「東北一中」呢？\n\n於是，這個網站就誕生了。\n\n網站中有許多新創的功能，比如未來會出現的「實物圖書館」，旨在共享大家手中有的資源。比如說考完TOEIC但是題本沒寫完，就可以將題本贈送給有需要的人。尚未動工的「卓越會」是宜中資訊最高殿堂，任何跟資訊有關的都會在裡面，包括了筆者的網頁技能等等。還有配套的「YLSH Online Judge」等等，都是未來會出現的。\n\n本站使用的前端框架是Vue.js 3.0，後端為Google App Script，資料庫為Google Sheet，都是免費的東西，但是處理速度有些緩慢（需要讀取資料庫的頁面大概要3~4秒），如果未來能有資金的話我可以把資料庫替掉，增加使用體驗，但我認為現階段先這樣就夠了。\n\n希冀未來某天，當台灣人提到東北一中，會第一個聯想到宜蘭高中而非某個很醜的T-shirt（蘿糕真是有夠白痴，自封東北一中還把字樣印在T-shirt上賣）\n\n*20230504 戴偉璿 筆*\n\t\t\t\t"}}};const de=(0,d.Z)(me,[["render",ie],["__scopeId","data-v-ac87923c"]]);var ce=de;const pe=e=>((0,l.dD)("data-v-312ef8c0"),e=e(),(0,l.Cn)(),e),fe={class:"container"},he=pe((()=>(0,l._)("label",{for:"title"},"標題",-1))),ge=pe((()=>(0,l._)("label",{for:"author"},"作者",-1))),be=pe((()=>(0,l._)("label",{for:"summary"},"摘要",-1))),we=pe((()=>(0,l._)("label",{for:"content"},"內容(建議放大後編輯)",-1))),_e=pe((()=>(0,l._)("br",null,null,-1))),ve=pe((()=>(0,l._)("label",{for:"subject"},"科目",-1))),ye=["value"],ke=pe((()=>(0,l._)("label",{for:"videos"},"影片",-1))),Ue=pe((()=>(0,l._)("label",{for:"hashtags"},"HashTags",-1))),xe=pe((()=>(0,l._)("input",{type:"submit",value:"Submit",name:"submit"},null,-1))),Se={key:0},We=pe((()=>(0,l._)("br",null,null,-1))),Ve=pe((()=>(0,l._)("br",null,null,-1)));function je(e,t,o,r,a,s){const u=(0,l.up)("v-md-editor");return(0,l.wg)(),(0,l.iD)("div",fe,[(0,l._)("form",{onSubmit:t[7]||(t[7]=(0,n.iM)(((...e)=>s.submitForm&&s.submitForm(...e)),["prevent"]))},[he,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.form.title=e),type:"text",placeholder:"請輸入標題"},null,512),[[n.nr,a.form.title]]),ge,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>a.form.author=e),type:"text",placeholder:"請輸入作者",disabled:""},null,512),[[n.nr,a.form.author]]),be,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>a.form.summary=e),type:"text",placeholder:"摘要請勿超過50字"},null,512),[[n.nr,a.form.summary]]),we,(0,l.Wm)(u,{modelValue:a.form.content,"onUpdate:modelValue":t[3]||(t[3]=e=>a.form.content=e),style:{height:"500px"}},null,8,["modelValue"]),_e,ve,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>a.form.subject=e)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.subjectlist,((e,t)=>((0,l.wg)(),(0,l.iD)("option",{key:t,value:e},(0,f.zw)(e),9,ye)))),128))],512),[[n.bM,a.form.subject]]),ke,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>a.form.video=e),type:"text",placeholder:"請貼上youtube分享的嵌入碼"},null,512),[[n.nr,a.form.video]]),Ue,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>a.form.tags=e),type:"text",placeholder:'請輸入標籤，請以","間隔'},null,512),[[n.nr,a.form.tags]]),xe,a.showText?((0,l.wg)(),(0,l.iD)("p",Se,"處理中，請稍候")):(0,l.kq)("",!0),We,(0,l.Uk)(),Ve],32)])}var Te={data(){return{form:{title:"",author:this.$store.getters.getName,summary:"",content:"",video:"",subject:"",tags:""},subjectlist:["國文","數學","英文","物理","化學","生物","地科","資訊","社會","其他"],showText:0}},mounted(){0==this.$store.getters.getLogin&&(alert("請先登入"),this.$router.push("/login"))},methods:{submitForm(){this.showText=1;const e="https://script.google.com/macros/s/AKfycbz2t22igsmipa81bgWNJkrld95jvUVjJ7aTBELNmKIomIcXskf8yLn3JB5NwMcJSG13/exec",t=new FormData;t.append("time",(new Date).toLocaleString()),t.append("title",this.form.title),t.append("author",this.form.author),t.append("summary",this.form.summary),t.append("content",this.form.content),t.append("subject",this.form.subject),t.append("tags",this.form.tags),t.append("video",this.form.video),fetch(e,{method:"POST",body:t}).then((e=>{alert("上傳成功！！！"),this.$router.push("/blogs")})).catch((e=>console.error("Error!",e.message)))}}};const De=(0,d.Z)(Te,[["render",je],["__scopeId","data-v-312ef8c0"]]);var Ne=De;const Pe=e=>((0,l.dD)("data-v-2eb01a54"),e=e(),(0,l.Cn)(),e),Le={class:"container"},Ze=Pe((()=>(0,l._)("h2",null,"註冊表單",-1))),ze={class:"form-group"},Ce=Pe((()=>(0,l._)("label",{for:"username"},"帳號 *",-1))),Oe={class:"form-group"},qe=Pe((()=>(0,l._)("label",{for:"password"},"密碼 *",-1))),Fe={class:"form-group"},$e=Pe((()=>(0,l._)("label",{for:"confirmPassword"},"確認密碼 *",-1))),Me={class:"form-group"},Ge=Pe((()=>(0,l._)("label",{for:"realName"},"真實姓名 *",-1))),Ae={class:"form-group"},Ee=Pe((()=>(0,l._)("label",{for:"email"},"電子郵件",-1))),Ke={class:"form-group"},He=Pe((()=>(0,l._)("label",{for:"phone"},"電話號碼",-1))),Be={class:"form-group"},Ie=Pe((()=>(0,l._)("label",{for:"mood"},"心情留言",-1))),Je=["value"];function Qe(e,t,o,r,a,s){return(0,l.wg)(),(0,l.iD)("div",Le,[Ze,(0,l._)("form",{onSubmit:t[7]||(t[7]=(0,n.iM)(((...e)=>s.submitForm&&s.submitForm(...e)),["prevent"]))},[(0,l._)("div",ze,[Ce,(0,l.wy)((0,l._)("input",{type:"text",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>a.form.username=e),required:""},null,512),[[n.nr,a.form.username]])]),(0,l._)("div",Oe,[qe,(0,l.wy)((0,l._)("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>a.form.password=e),required:""},null,512),[[n.nr,a.form.password]])]),(0,l._)("div",Fe,[$e,(0,l.wy)((0,l._)("input",{type:"password",id:"confirmPassword","onUpdate:modelValue":t[2]||(t[2]=e=>a.form.confirmPassword=e),required:""},null,512),[[n.nr,a.form.confirmPassword]])]),(0,l._)("div",Me,[Ge,(0,l.wy)((0,l._)("input",{type:"text",id:"realName","onUpdate:modelValue":t[3]||(t[3]=e=>a.form.realName=e),required:""},null,512),[[n.nr,a.form.realName]])]),(0,l._)("div",Ae,[Ee,(0,l.wy)((0,l._)("input",{type:"email",id:"email","onUpdate:modelValue":t[4]||(t[4]=e=>a.form.email=e)},null,512),[[n.nr,a.form.email]])]),(0,l._)("div",Ke,[He,(0,l.wy)((0,l._)("input",{type:"tel",id:"phone","onUpdate:modelValue":t[5]||(t[5]=e=>a.form.phone=e)},null,512),[[n.nr,a.form.phone]])]),(0,l._)("div",Be,[Ie,(0,l.wy)((0,l._)("textarea",{id:"mood","onUpdate:modelValue":t[6]||(t[6]=e=>a.form.mood=e)},null,512),[[n.nr,a.form.mood]])]),(0,l._)("input",{type:"submit",value:a.register},null,8,Je)],32)])}var Re={data(){return{form:{username:"",password:"",confirmPassword:"",realName:"",email:"",phone:"",mood:"",status:"normal"},register:"註冊",usernameExist:!1,rows:[]}},methods:{submitForm(){this.register="處理中，請稍後",ee.Z.get("https://script.google.com/macros/s/AKfycbyGb1Ti5VO37f3z7bNjmmf9FMoa43zlRJXFnyemP_s0T-qSyrFzmwmkmCXgdmkoduZb/exec").then((e=>{this.rows=e.data;const t=this.rows.find((e=>e.username==this.form.username));t||(alert("帳號錯誤"),location.reload())})).catch((e=>{alert(e)})).then(alert(this.usernameExist))}}};const Xe=(0,d.Z)(Re,[["render",Qe],["__scopeId","data-v-2eb01a54"]]);var Ye=Xe;const et=e=>((0,l.dD)("data-v-6be6ac28"),e=e(),(0,l.Cn)(),e),tt={class:"container"},ot=et((()=>(0,l._)("h3",null,"登入",-1))),nt=et((()=>(0,l._)("br",null,null,-1))),lt={class:"form-group"},rt=et((()=>(0,l._)("h5",null,"帳號",-1))),at=et((()=>(0,l._)("br",null,null,-1))),st=et((()=>(0,l._)("h5",null,"密碼",-1))),ut=et((()=>(0,l._)("br",null,null,-1))),it={type:"submit",class:"btn btn-primary"};function mt(e,t,o,r,a,s){const u=(0,l.up)("b-form-input");return(0,l.wg)(),(0,l.iD)("div",tt,[ot,(0,l.Uk)(),nt,(0,l._)("form",{onSubmit:t[2]||(t[2]=(0,n.iM)(((...e)=>s.login&&s.login(...e)),["prevent"]))},[(0,l._)("div",lt,[rt,(0,l.Wm)(u,{class:"form-control form-control-lg",modelValue:a.usr,"onUpdate:modelValue":t[0]||(t[0]=e=>a.usr=e),type:"text",placeholder:"請輸入您的帳號"},null,8,["modelValue"]),at,st,(0,l.Wm)(u,{class:"form-control form-control-lg",modelValue:a.psw,"onUpdate:modelValue":t[1]||(t[1]=e=>a.psw=e),type:"password",placeholder:"請輸入您的密碼"},null,8,["modelValue"])]),ut,(0,l._)("button",it,(0,f.zw)(a.btnText),1)],32)])}var dt={data(){return{rows:[],usr:"",psw:"",showPassword:!1,btnText:"Submit"}},methods:{login(){this.btnText="處理中，請稍後",ee.Z.get("https://script.google.com/macros/s/AKfycbyGb1Ti5VO37f3z7bNjmmf9FMoa43zlRJXFnyemP_s0T-qSyrFzmwmkmCXgdmkoduZb/exec").then((e=>{this.rows=e.data;const t=this.rows.find((e=>e.username==this.usr));t?t.password!=this.psw?(alert("密碼錯誤"),location.reload()):(alert("登入成功！"),this.$store.dispatch("setLogin",!0),this.$store.dispatch("setName",t.realName),this.$router.push("/")):(alert("帳號錯誤"),location.reload())})).catch((e=>{alert(e)}))}}};const ct=(0,d.Z)(dt,[["render",mt],["__scopeId","data-v-6be6ac28"]]);var pt=ct;function ft(e,t){return(0,l.wg)(),(0,l.iD)("div",null," Welcome ")}const ht={},gt=(0,d.Z)(ht,[["render",ft]]);var bt=gt;function wt(e,t,o,r,a,s){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.newUsername=e),placeholder:"Enter username"},null,512),[[n.nr,a.newUsername]]),(0,l._)("button",{onClick:t[1]||(t[1]=(...e)=>s.updateUsername&&s.updateUsername(...e))},"Update Username"),(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>a.newStatus=e),placeholder:"Enter status"},null,512),[[n.nr,a.newStatus]]),(0,l._)("button",{onClick:t[3]||(t[3]=(...e)=>s.updateStatus&&s.updateStatus(...e))},"Update Status"),(0,l._)("button",{onClick:t[4]||(t[4]=(...e)=>s.login&&s.login(...e))},"login")])}var _t={data(){return{newUsername:"",newStatus:""}},methods:{updateUsername(){this.$store.dispatch("setUsername",this.newUsername),this.newUsername=""},updateStatus(){this.$store.dispatch("setStatus",this.newStatus),this.newStatus=""},login(){this.$store.dispatch("setLogin",0)}}};const vt=(0,d.Z)(_t,[["render",wt]]);var yt=vt;const kt={class:"container"},Ut=["innerHTML"],xt=(0,l._)("br",null,null,-1),St=(0,l._)("br",null,null,-1),Wt=(0,l._)("br",null,null,-1);function Vt(e,t,o,n,r,a){const s=(0,l.up)("v-md-editor");return(0,l.wg)(),(0,l.iD)("div",kt,[(0,l._)("h2",null,(0,f.zw)(r.blog.title),1),(0,l._)("h6",null,"作者："+(0,f.zw)(r.blog.author),1),(0,l._)("h6",null,"時間："+(0,f.zw)(r.blog.time),1),(0,l._)("h6",null,"分類："+(0,f.zw)(r.blog.subject),1),r.blog.video?((0,l.wg)(),(0,l.iD)("div",{key:0,class:"video-container",innerHTML:r.blog.video},null,8,Ut)):(0,l.kq)("",!0),(0,l.Wm)(s,{modelValue:r.blog.content,"onUpdate:modelValue":t[0]||(t[0]=e=>r.blog.content=e),mode:"preview"},null,8,["modelValue"]),xt,St,Wt])}var jt={data(){return{rows:[],cookieName:"id",timeid:"",blog:""}},mounted(){this.timeid=this.$route.params.id,ee.Z.get("https://script.google.com/macros/s/AKfycbxd9TQCEQ-PiVCj2zSN-TLGxw-GB2l4ppf1GcdKhS0yxRMr-PqWeqOtrkzwRWqoj1Q3/exec").then((e=>{this.rows=e.data,this.blog=this.rows.find((e=>e.time==this.timeid))})).catch((e=>{console.log(e)}))},methods:{}};const Tt=(0,d.Z)(jt,[["render",Vt]]);var Dt=Tt;const Nt=(0,V.p7)({history:(0,V.r5)(),routes:[{path:"/",component:I},{path:"/blogs",component:ne},{path:"/about",component:ce},{path:"/addPage",component:Ne},{path:"/register",component:Ye},{path:"/login",component:pt},{path:"/admin",component:bt},{path:"/test",component:yt},{path:"/show/:id",component:Dt,name:"Show"}]});var Pt=Nt,Lt=o(7085),Zt=o.n(Lt),zt=o(1986),Ct=o.n(zt),Ot=o(5245),qt=o(5660),Ft=o.n(qt),$t=o(4678);Zt().lang.use("en-US",$t.Z),Zt().use(Ct(),{Prism:Ft()}).use((0,Ot.Z)());var Mt=Zt(),Gt=o(3907),At=(0,Gt.MT)({state:{username:"",status:"",login:"",name:""},mutations:{setUsername(e,t){e.username=t},setStatus(e,t){e.status=t},setLogin(e,t){e.login=t},setName(e,t){e.name=t}},actions:{setUsername({commit:e},t){e("setUsername",t)},setStatus({commit:e},t){e("setStatus",t)},setLogin({commit:e},t){e("setLogin",t)},setName({commit:e},t){e("setName",t)}},getters:{getUsername:e=>e.username,getStatus:e=>e.status,getLogin:e=>e.login,getName:e=>e.name}});const Et=(0,n.ri)(S).use(W.ZP).use(Pt).use(At).use(Mt);Et.mount("#app")}},t={};function o(n){var l=t[n];if(void 0!==l)return l.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,l,r){if(!n){var a=1/0;for(m=0;m<e.length;m++){n=e[m][0],l=e[m][1],r=e[m][2];for(var s=!0,u=0;u<n.length;u++)(!1&r||a>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[u])}))?n.splice(u--,1):(s=!1,r<a&&(a=r));if(s){e.splice(m--,1);var i=l();void 0!==i&&(t=i)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[n,l,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p=""}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,r,a=n[0],s=n[1],u=n[2],i=0;if(a.some((function(t){return 0!==e[t]}))){for(l in s)o.o(s,l)&&(o.m[l]=s[l]);if(u)var m=u(o)}for(t&&t(n);i<a.length;i++)r=a[i],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(m)},n=self["webpackChunkweb"]=self["webpackChunkweb"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(9134)}));n=o.O(n)})();
//# sourceMappingURL=app.52a33a04.js.map