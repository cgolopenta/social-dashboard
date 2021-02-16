import React from "react"
import {Switch} from '@material-ui/core';

const DashboardHeader = (props)=>{
    const {darkMode, onDarkModeChanged} = props

    return (
        <div className="header">
            <div className="header-title">
                <h1 className="text-primary font-bold">Social Media Dashboard</h1>
                <p className="text-secondary font-bold" style={{textAlign:"left"}}>{`Total Followers: ${23.0002}`}</p>
            </div>
            <div style={{display:"flex"}}>
                <div style={{margin:"auto"}}>
                    <p className="text-secondary font-bold">Dark Mode</p>
                </div>
                <div style={{margin:"auto"}}>
                    <Switch 
                        checked={darkMode}
                        onChange={onDarkModeChanged}
                        color="secondary"
                    />
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader