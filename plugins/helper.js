
//Methods to retrieve image file whole of project
const loadImg = {
  name: 'loadImg',
  getData(img) {
    var base_url=process.env.FILE_BASE_URL;
    var img_url = `${base_url}/uploads/lessonsPic/${img}`;
    return img_url;
  }
}
//End Methods to retrieve image file whole of project



//Inject top methods to usable whole of project
export default ({ app }, inject) => {
  inject('loadImg', loadImg)
}
//End Inject top methods to usable whole of project


