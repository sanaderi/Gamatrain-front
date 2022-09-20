import Vue from 'vue'

//Methods to retrieve image file whole of project
const loadImg = {
  name: 'loadImg',
  getData(img) {
    var base_url=process.env.FILE_BASE_URL;
    var img_url = `${base_url}/uploads/lessonsPic/${img}`;
    return img_url;
  }
}


const loadAvatar= {
  name:'loadAvatar',
  currentUser(auth){
    if (auth.user.avatar)
      return `${process.env.FILE_BASE_URL}/uploads/user/avatars/${auth.user.avatar}`
    else
      return `${process.env.FILE_BASE_URL}/assets/image/avatars/default/png/user.png`
  }

}


//End Methods to retrieve image file whole of project



//Inject top methods to usable whole of project
export default ({ $auth,app}, inject) => {
  inject('loadImg', loadImg);
  inject('loadAvatar', loadAvatar);



  //For format number
  Vue.filter('numberFormat', function (value) {
    return Number(value).toLocaleString("en-US");
  })
}
//End Inject top methods to usable whole of project


