import * as React from "react";
import "./index.css";
const outerCss: React.CSSProperties = {
  color: "rgb(55,55,55)"
};

const logTitle = (text: Element) => {
  let arr = [
    "为",
    "您",
    "提",
    "供",
    "互",
    "联",
    "网",
    "技",
    "术",
    "上",
    "“",
    "一",
    "键",
    "启",
    "动",
    "”"
  ];
  for (var i = 0; i < arr.length; i++) {
    setTimeout(
      i => {
        text.textContent += arr[i];
      },130 * i,i);
  }
};

const MainImg =React.memo((props:any)=>{
  const [img1, setImg1] = React.useState<string>('main_img nth_0 hidden')
  const [img2,setImg2] = React.useState<string>('main_img nth_1 hidden')
  const [img3,setImg3] = React.useState<string>('main_img nth_2 hidden')
  const [img4,setImg4] = React.useState<string>("main_img nth_3")
  const [img5,setImg5] = React.useState<string>('main_img nth_4 hidden')
  const [img6,setImg6] = React.useState<string>('main_img nth_5 hidden')
  const [img7,setImg7] = React.useState<string>('main_img nth_6 hidden')
  React.useEffect(() => {
    const handleScroll = ()=>{
      const documentScroll = document.documentElement.scrollTop
      console.log(documentScroll)
      if(documentScroll > 620){
          setImg1('main_img nth_0 show')
      }
      if(documentScroll > 1340){
          setImg2('main_img nth_1 show')
      }
      if(documentScroll > 2100){
          setImg3('main_img nth_2 show')
      }
      if(documentScroll > 2800){
          setImg4('main_img nth_3 show')
      }
      if(documentScroll > 3550){
        setImg5('main_img nth_4 show')
      }
      if(documentScroll > 4250){
        setImg6('main_img nth_5 show')
      }
      if(documentScroll > 5040){
        setImg7('main_img nth_6 show')
      }
    }
    handleScroll()
    window.addEventListener('scroll',handleScroll)
    let text = document.querySelector(".main_text span");
    if (text) {
      logTitle(text);
    }
  },[])
  return (
      <div>
        <main>
          <div className="main_body">
            <div className="main_log">
              <img
                src="http://www.powerlaunch.cn/wp-content/uploads/2017/09/power-launch-solftware.jpg"
                alt=""
              />
            </div>
            <div className="main_text">
              <span></span>
              <span>|</span>
            </div>
          </div>
          <div className={img1}>
            <div>
               <span>为您找到更好的IT解决方案</span>
              <span>DISCOVER A BETTER IT SOLUTION</span>
            </div>
          </div>
          <div className={img2}>
            <div>
              <span>为您带来更专业的技术力量</span>
              <span>A BETTER IT TEAM</span>
            </div>
          </div>
          <div className= {img3}>
            <div>
              <span>为您设计更易用的产品</span>
              <span>DESIGN FOR BETTER UX</span>
            </div>
          </div>
          <div className={img4}>
            <div>
              <span style={outerCss}>每一个项目, 都量身定做</span>
              <span style={outerCss}>DESIGN FOR IT</span>
            </div>
          </div>
          <div className={img5}>
            <div>
              <span>质量. 性能. 安全性</span>
              <span>QUALITY. PERFORMANCE. SAFETY</span>
            </div>
          </div>
          <div className={img6}>
            <div>
              <span>我们已经准备好任何挑战</span>
              <span>WE’RE READY FOR ANY CHALLANGE!</span>
            </div>
          </div>
          <div className={img7}>
            <div>
              <span>限制我们能力的, 也许是你的想象力</span>
              <span>REACH OUR LIMIT</span>
            </div>
          </div>
        </main>
      </div>  
  )
})

const Foot : React.FC = props=>{
  return (
      <div className="foot">
        <div className="foot_h1">
          <h1>
            <span>
            Our service
            </span>
          </h1>
        </div>
        <div className="foot_img">
          <div>
            <div>
              <img src="http://www.powerlaunch.cn/wp-content/uploads/2017/01/icon-11.png" alt=""/>
              <h4>网站开发</h4>
            </div>
            <ul>
              <li>高端品牌网站开发</li>
              <li>企业网站开发设计</li>
              <li>政府网站开发建设</li>
              <li>H5网站开发建设</li>
              <li>H5游戏开发</li>
            </ul>
          </div>
          <div>
            <div>
            <img src="http://www.powerlaunch.cn/wp-content/uploads/2017/01/icon-9.png" alt=""/>
              <h4>App开发</h4>
            </div>
            <ul>
              <li>O2O工具App</li>
              <li>社交聊天App</li>
              <li>电子商务App</li>
              <li>社区论坛App</li>
              <li>互联网金融App</li>
            </ul>
          </div>
          <div>
            <div>
            <img src="http://www.powerlaunch.cn/wp-content/uploads/2017/01/icon-13.png" alt=""/>
              <h4>微信端开发</h4>
            </div>
            <ul>
              <li>公众号开发</li>
              <li>小程序开发</li>
              <li>微信端商城开发</li>
              <li>营销工具开发</li>
              <li>开发者平台开发</li>
            </ul>
          </div>
          <div>
            <div>
            <img src="http://www.powerlaunch.cn/wp-content/uploads/2017/01/icon-10.png" alt=""/>
              <h4>商业系统开发</h4>
            </div>
            <ul>
              <li>大数据管理系统开发</li>
              <li>物联网应用开发</li>
              <li>OA管理系统开发</li>
              <li>智能云服务系统开发</li>
              <li>安全防卫系统开发</li>
            </ul>
          </div>
          <div>
            <div>
            <img src="http://www.powerlaunch.cn/wp-content/uploads/2017/01/icon-8.png" alt=""/>
              <h4>数据挖掘服务</h4>
            </div>
            <ul>
              <li>互联网数据挖掘</li>
              <li>企业数据挖掘</li>
              <li>市场分析</li>
              <li>用户调研</li>
              <li>精准营销</li>
            </ul>
          </div>
        </div>
        <footer><a href="">了解更多</a></footer>
        <div className="foot_h1">
          <h1>
            <span>
            Our works
            </span>
          </h1>
        </div>
        <p>“灵魂灌注于每一个产品”</p>
      </div>
  )
}


const Home: React.FC = (props: any) => {
  return (
    <React.Fragment>
        <MainImg/>  
        <Foot />
    </React.Fragment>
  );
};

export default Home;
