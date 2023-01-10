import s from "./style.module.css";
import pokemon from "./pokemon";
import {Layout} from "antd";
const {Header, Footer, Content} = Layout;




function AppAnt() {
  return (
      <Layout>
        <Header className={s.header}>
            Header
        </Header>
        <Content>
        
        </Content>
        <Footer>
        Footer
        </Footer>
      </Layout>
  )
}


export default AppAnt;