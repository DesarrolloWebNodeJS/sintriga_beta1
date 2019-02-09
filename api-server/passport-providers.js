var successRedirect = '/';
// var failureRedirect = '/signin';
// var linkFailureRedirect = '/account';
// var githubProfileSuccessRedirect = '/settings';

export default {
  local: {
    provider: 'local',
    module: 'passport-local',
    usernameField: 'email',
    passwordField: 'password',
    authPath: '/auth/local',
    successRedirect: successRedirect,
    failureRedirect: '/registro',
    session: true,
    failureFlash: true
  }
};
