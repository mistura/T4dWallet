import { Button } from "antd"
import React from "react"
import { Link } from "react-router-dom"

export default function Header () {
    const menu =[
        {name: 'Services', url: "#services"},
        {name: 'Contact', url: "#contact"},
    ]
    return(
        <section className="h-[50px] w-full border-b-[1.5px] border-[#D9DADC] flex items-center justify-between px-[10%]">
                <h2 className="logo text-[#074FBA] text-[20px]">TEDWallet </h2>
                <div className="flex space-x-[16px] items-center">
                    <div className="flex space-x-6 mx-[24px]">
                    {menu.map((list) => (
                        <a href={list.url}>{list.name}</a>
                    ))}


                    </div>
                    
                   <Link to="/login">
                   <Button type="primary" className="shadow-md px-[40px] rounded-[50px]">Sign In</Button>
                   </Link>

                </div>


        </section>
    )
}