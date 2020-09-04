import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index'
import Box from '../component/Box'

class BoxCon extends React.Component {
    render () {
        return (
            <Box
                color={this.props.color}
                handleClick={this.props.loadColor}
            ></Box>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators)(BoxCon)