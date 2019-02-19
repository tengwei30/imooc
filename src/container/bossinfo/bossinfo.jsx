import React from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import AvatarSelected from '../../component/avatarselected/avatarselected'
import { connect } from 'react-redux'
import { update } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'

@connect(
  state => state.user,
  { update }
)
class BossInfo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }
  onChange (key, val) {
    this.setState({
      [key]: val
    })
  }
  render() {
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return(
      <div>
        { redirect && redirect !== path ? <Redirect to={ this.props.redirectTo }></Redirect> : null }
        <NavBar mode="dark">BOSS 完善信息内容</NavBar>
        <AvatarSelected
          selectAvatar={ (imgname) => {
            this.setState({
              avatar: imgname
            })
          } }
        ></AvatarSelected>
        <InputItem onChange={ v => this.onChange('title', v) }>
          招聘职位
        </InputItem>
        <InputItem onChange={ v => this.onChange('company', v) }>
          公司名称
        </InputItem>
        <InputItem onChange={ v => this.onChange('money', v) }>
          薪资待遇
        </InputItem>
        <TextareaItem
          onChange={ v => this.onChange('desc', v) }
          title = "职位要求"
          autoHeight
          rows = { 3 }
        >
        </TextareaItem>
        <Button
          onClick={() => this.props.update(this.state)}
          type="primary"
        >保存</Button>
      </div>
    )
  }
}

export default BossInfo
