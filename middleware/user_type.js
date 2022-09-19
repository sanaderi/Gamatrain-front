export default function ({ $auth, redirect }) {
  if(!($auth.user.group_id==="5" || $auth.user.group_id==="6"))
    return redirect('/dashboard/type');

}
