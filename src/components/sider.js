import React, { Component } from "react";
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Children extends Component{

    constructor(props){
        super(props);
    }
    getData = () => {
        return [
            {
                id:1001,
                name:'系统管理',
                type:'tab',
                children:[
                    {
                        id:1002,
                        type:'page',
                        name:'首页',
                        routerPath:'/home',
                        routerName:'home',
                        parentId:1001
                    },{
                        id:1003,
                        type:'page',
                        name:'关于我们',
                        routerPath:'/about',
                        routerName:'about',
                        parentId:1001
                    },{
                        id:1004,
                        type:'page',
                        name:'indexBox',
                        routerPath:'/inbox',
                        routerName:'inbox',
                        parentId:1001
                    }
                ]
            },
            {
                id:2001,
                name:'系统管理',
                type:'tab',
                children:[
                    {
                        id:2001,
                        type:'page',
                        name:'关于我们',
                        routerPath:'/about',
                        routerName:'about',
                        parentId:1001
                    }
                ]
            }

        ]
    }

    handleClick = (e) => {
        console.log('click ', e);
    }
    render(){
        let data = this.getData();
        let doms1 = [];
        for(let i = 0;i<data.length;i++){
            const vi = data[i].children.map((items) => {
                return <Menu.Item className="ant-menu-item" key = {items.id} data-id={items.id}> <Link to={items.routerPath}>{items.name}</Link></Menu.Item>
            }) 
            doms1.push(<SubMenu key={data[i].id} title={<span><Icon type="mail" /><span>{data[i].name}</span></span>}>
                {vi}  
             </SubMenu>) 
        }
        let dom2 = (<Menu
                        onClick={this.handleClick}
                        style={{ width: 160, height:'100%'}}
                        defaultSelectedKeys={['1002']}
                        defaultOpenKeys={['1001']}
                        mode="inline"
                    >
                        {doms1}
                    </Menu>)
        return dom2
        
    }
}

export default class Sider extends Component{
    render(){
        return (
            <div className="Sider">
                <Children />
            </div>
        )
    }
}