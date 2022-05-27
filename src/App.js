import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Bi from './rootofequetion/BitsectionNew';
import False from './rootofequetion/falsepositionNew';
import Newton_raphson from './rootofequetion/Newton_raphson';
import Oneposition from './rootofequetion/oneposition';
import Secant from './rootofequetion/Secant';
import Conjugate from './LinearAlgebra/Conjugate';
import Crammer from './LinearAlgebra/crammer';
import Gauss_Jordan from './LinearAlgebra/Gauss_Jordan';
import Gauss_Seidel from './LinearAlgebra/Gauss_Seidel';
import Gauss from './LinearAlgebra/Gauss';
import Jacobi from './LinearAlgebra/jacobi';
import Lu from './LinearAlgebra/lu';
import Newton from './Interpolation/Newton';
import Lagrange from './Interpolation/Lagrange';
import Spline from './Interpolation/Spline';
import Lin from './Regression/Linear';
import Mul from './Regression/MultipleLinear';
import Po from './Regression/Polynomial';
import { Typography, Space } from 'antd';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';
const { Title } = Typography;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function App(){
  const [Token,setToken] = useState("");
  //let Token
  axios.post(`http://localhost:5001/login`,{
    "email":"kampan@gmail.com",
    "password":"123456"
  }).then(res=>{setToken(res.data.accessToken)})
  console.log(Token)

  return(
    <Router>
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

      <Title  type="success"level={2}  ><h1 style={{ color: "white" }}>Numerical method</h1></Title>
      
      
      </Menu>
    </Header>
    <Layout>
    <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<NotificationOutlined />} title="Root Of Equetion">
            <Menu.Item key="1"><Link to="/Bitsection">Bitsection</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/Falseposition">Falseposition</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/Newton_raphson">Newton raphson</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/oneposition">Onepoint</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/secant">Secant</Link></Menu.Item>
           {/*  <Menu.Item key="6">option6</Menu.Item> */}
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="LinearAlgebra">
            <Menu.Item key="6"><Link to="/crammer">Crammer's Rule</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/gauss_seidel">Gauss Seidel</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/gauss_jordan">Gauss Jordan</Link></Menu.Item>
            <Menu.Item key="9"><Link to="/gauss">Gauss Elimination</Link></Menu.Item>
            <Menu.Item key="11"><Link to="/conjugate">Conjugate Gradient</Link></Menu.Item>
            <Menu.Item key="12"><Link to="/Lu">Lu Decomposition</Link></Menu.Item>
            <Menu.Item key="13"><Link to="/jacobi">Jacobi Iteration</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="Interpolation">
            <Menu.Item key="14"><Link to="/newton">Newton divide</Link></Menu.Item>
            <Menu.Item key="15"><Link to="/spline">Spline</Link></Menu.Item>
            <Menu.Item key="16"><Link to="/lagrange">Lagrange</Link></Menu.Item>
            {/* <Menu.Item key="17">option12</Menu.Item> */}
          </SubMenu>
          <SubMenu key="sub4" icon={<NotificationOutlined />} title="Least Squares Regression">
            <Menu.Item key="18"><Link to="/linear">Linear</Link></Menu.Item>
            <Menu.Item key="19"><Link to="/poly">Polynomial</Link></Menu.Item>
            <Menu.Item key="20"><Link to="/multiple">MultipleLinear</Link></Menu.Item>
           {/*  <Menu.Item key="21">option12</Menu.Item> */}
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          < Routes>
            <Route exact path='/Bitsection' element = {<Bi Token={Token}/>} />
          </ Routes>
          <Routes>
          <Route exact path='/Falseposition' element = {<False/>} />
          </Routes>
          <Routes>
          <Route exact path='/Newton_raphson' element = {<Newton_raphson/>} />
          </Routes>
          <Routes>
          <Route exact path='/oneposition' element = {<Oneposition/>} />
          </Routes>
          <Routes>
          <Route exact path='/secant' element = {<Secant/>} />
          </Routes>
          <Routes>
          <Route exact path='/conjugate' element = {<Conjugate/>} />
          </Routes>
          <Routes>
          <Route exact path='/crammer' element = {<Crammer/>} />
          </Routes>
          <Routes>
          <Route exact path='/gauss_jordan' element = {<Gauss_Jordan/>} />
          </Routes>
          <Routes>
          <Route exact path='/gauss_seidel' element = {<Gauss_Seidel/>} />
          </Routes>
          <Routes>
          <Route exact path='/gauss' element = {<Gauss/>} />
          </Routes>
          <Routes>
          <Route exact path='/jacobi' element = {<Jacobi/>} />
          </Routes>
          <Routes>
          <Route exact path='/lu' element = {<Lu/>} />
          </Routes>
          <Routes>
          <Route exact path='/newton' element = {<Newton/>} />
          </Routes>
          <Routes>
          <Route exact path='/spline' element = {<Spline/>} />
          </Routes>
          <Routes>
          <Route exact path='/lagrange' element = {<Lagrange/>} />
          </Routes>
          <Routes>
          <Route exact path='/linear' element = {<Lin/>} />
          </Routes>
          <Routes>
          <Route exact path='/poly' element = {<Po/>} />
          </Routes>
          <Routes>
          <Route exact path='/multiple' element = {<Mul/>} />
          </Routes>
        </Content>
        
      </Layout>
    </Layout>
    </Layout>
    </Router>
  )
  
}
export default App;