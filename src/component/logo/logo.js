import React from 'react'
import LogoImg from './job.png'
import './logo.css'

class Logo extends React.Component {
    render () {
        return (
            <div className="logo_container">
                <img src={ LogoImg } />
            </div>
        )
    }
}
export default Logo
