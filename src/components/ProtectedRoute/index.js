import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const isTrue = Cookies.get('jwt_token')

  if (isTrue) {
    return <Route {...props} />
  }
  return <Redirect to="/login" />
}

export default ProtectedRoute
