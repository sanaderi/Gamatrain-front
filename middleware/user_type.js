export default function ({$auth, redirect}) {
  if ($auth.user && $auth.user.group_id)
    if ($auth.user.group_id === '3') {
      return redirect('/test-maker');
    } else if ($auth.user.group_id === "5" || $auth.user.group_id === "6") {
      //Do nothing
    } else {
      return redirect('/user/type');
    }

}
