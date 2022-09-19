export default function ({ $auth, redirect }) {
  if($auth.user.first_name===null || $auth.user.last_name===null || $auth.user.sex===null)
    return redirect('/dashboard/info');

}
