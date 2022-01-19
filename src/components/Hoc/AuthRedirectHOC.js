import React from 'react'

export default function AuthRedirectHOC(Component) {

    class RedirectCompomenet extends React.Component {
        render() {
            if (!this.props.isAuth) return
            return <Component {...this.props} />
        }
    }

    return RedirectCompomenet

}