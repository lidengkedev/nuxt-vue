const getters = {
    token: state => state.user.token,
    username: state => state.user.username,
    userid: state => state.user.userid,
    avator: state => state.user.avator,
    mobile: state => state.user.mobile
}

export default getters