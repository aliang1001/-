import * as React from 'react'
import './index.css'


const Work :React.FC  =  props=>{
    return (
        <main>
            <div className="main_header">
                <img src="http://www.powerlaunch.cn/wp-content/uploads/2017/08/power-launch-solftware.png" alt=""/>
            </div>
            <div className="main_section">
                <img className="main_img_left" src="http://www.powerlaunch.cn/wp-content/uploads/2019/09/微信图片_20190920165940.jpg" alt=""/>
                <div className="main_p">
                    <p>发票机器人管家</p>
                    <p>财务、供应链管理、法务等部门存在发票多、验真难、发票录入繁琐的痛点。发票机器人管家使用手机拍摄即可批量扫描全品类发票，运用OCR技术将发票上信息识别并导出，节省大量人工录入时间，针对增值税发票联网进行查验是否真票、错票。批量验真准确率100%，远远高于人工查询并节省大量人力。识别票面信息后，支持导出各种格式的结构化数据，以对接各式企业系统</p>
                    <p>支持：增值税纸质发票、增值税电子发票、汽车销售发票、二手车销售发票、出租车票、火车票、飞机票、路桥费票、定额发票等各类发票</p>
                    <img className="main_p_img_right" src="http://www.powerlaunch.cn/wp-content/uploads/2019/09/微信图片_20190920170000.jpg" alt=""/>
                </div>
            </div>
            <div className="main_nth1">
                <img src="http://www.powerlaunch.cn/wp-content/uploads/2019/09/微信图片_20190920170017.jpg" alt=""/>
                <div className="main_right">
                    <p>人行账管系统代填RPA</p>
                    <p>
                    银行内部的账户信息需要手工录入至人民银行结算账户管理系统，因账户字段多（基本信息，帐户信息等），人工需要切换不同系统录入，费时费力且容易出错。通过RPA自动读取待填写帐户列表数据，获取账户信息并自动上传，OCR模块进行影像信息提取后再自动登入人行账管系统中完成录入提交。高效快速完成多系统间的数据迁移，大大提升了操作效率，降低错误可能
                    </p>
                </div>
            </div>
            <div className="main_nth2">
                <img src="http://www.powerlaunch.cn/wp-content/uploads/2019/09/微信图片_20190920170934.jpg" alt=""/>
                <div className="right">
                <p>51分店</p>
                    <p>
                    国内领先的微商城服务平台，免费为商家提供有效的移动电商解决方案。
                    帮助供应商提供一个快速有效的销售渠道，提供技术支持和代运营服务，整合渠道推广、粉丝管理等有效资源针对客户产品和                      行业的特殊需求，进行移动商城个性话需求开发、定制化微商分销规则、多层会员体系搭建和独特的行业功能，满足用户个性                    化体验，提升客户成交率和成单率，助力客户更好管理分销商和销售业绩
                    </p>
                </div>
            </div>
            <div className="main_nth3">
                <a className="main_nth3_a" target="_blank" href="https://www.wildatlanticway.com/home"><img src="http://www.powerlaunch.cn/wp-content/uploads/2017/09/Ireland.png" alt=""/></a>
            </div>
            <div className="main_footer">
                <p>POWERED BY 杭州榜置科技有限公司</p>
            </div>
        </main>
    )
}
export default Work