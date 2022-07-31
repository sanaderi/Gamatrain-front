
//Methods to retrieve image file whole of project
const loadImg = {
  name: 'loadImg',
  getData(img) {
    var base_url=process.env.FILE_BASE_URL;
    // https://core.gamatrain.com/uploads/tutorials/2022/07/26_QbeolmT05WDuNfZCb95z.png
    var img_url = `${base_url}/uploads/lessonsPic/lPic_7841b48f28ca5f271af02fe0cc6770a6.jpg`;
    return img_url;
  }
}
//End Methods to retrieve image file whole of project



//Inject top methods to usable whole of project
export default ({ app }, inject) => {
  inject('loadImg', loadImg)
}
//End Inject top methods to usable whole of project


