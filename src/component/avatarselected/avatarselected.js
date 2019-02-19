import React from 'react'
import { Grid, List } from 'antd-mobile'

class AvatarSelected extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const avatarList = '111,222,333,444'.split(',').map(v => ({
      icon: require(`../imgs/${v}.jpeg`),
      text: v
    }))
    const gridHeader = this.state.icon ?
                                        (
                                          <div>
                                            <span>已选择头像</span>
                                            <img style={{ width: 20 }} src={ this.state.icon } ></img>
                                          </div>
                                        )
                                       : '请选择头像'
    return(
      <div>
        <List renderHeader={() => gridHeader}>
          <Grid
            data={ avatarList }
            columnNum={4}
            onClick={elm => {
              this.setState(elm)
              this.props.selectAvatar(elm.text)
            }}
            ></Grid>
        </List>
      </div>
    )
  }
}

export default AvatarSelected
