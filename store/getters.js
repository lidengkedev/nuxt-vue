const getters = {
    token: state => state.modules.user.token,
    username: state => state.modules.user.username,
    userid: state => state.modules.user.userid,
    avator: state => state.modules.user.avator,
    mobile: state => state.modules.user.mobile
}

export default getters