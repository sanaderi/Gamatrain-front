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

//Convert level number to human understandable text
const testLevel= {
  name:'showTestLevel',
  show(val){
    if (val==='1')
      return 'Simple';
    if (val==='2')
      return 'Middle';
    if (val==='3')
      return 'Hard';
  }
}


const timeAgo={
  name:'timeAgo',
  calc(date){
    var timestamp = Date.parse(date)/1000;
    var strTime = ["Second", "Min", "Hour", "Day", "Month", "Year"];
    var length = ["60","60","24","30","12","10"];

    const currentDate = new Date();
    var currentTime = currentDate.getTime()/1000;

    if(currentTime >= timestamp) {
      var diff = currentTime- timestamp;
      for(var i = 0; diff >= length[i] && i < length.length-1; i++) {
        diff = diff / length[i];
      }

      diff = Math.round(diff);
      return `${diff} ${strTime[i]}${diff>1 ? "'s" : ''} Ago`;
    }
  }
}


//End Methods to retrieve image file whole of project



//Inject top methods to usable whole of project
export default ({ $auth,app}, inject) => {
  inject('loadImg', loadImg);
  inject('loadAvatar', loadAvatar);
  inject('testLevel',testLevel);
  inject('timeAgo',timeAgo);



  //For format number
  Vue.filter('numberFormat', function (value) {
    return Number(value).toLocaleString("en-US");
  })
}
//End Inject top methods to usable whole of project


