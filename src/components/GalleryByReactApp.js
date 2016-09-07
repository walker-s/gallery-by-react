'use strict';

var React = require('react/addons');



// CSS
require('normalize.css');
require('../styles/main.scss');

//��ȡͼƬ��ص�����
var imageDatas = require('../data/imageDatas.json');

//����ִֻ�к�������ͼƬ����Ϣת����ͼƬURL·����Ϣ
imageDatas = (function genImageURL(imageDataArr){
    for(var i=0,j= imageDataArr.length;i<j;i++){
        var sinleImageData=imageDataArr[i];
        sinleImageData.imageURL = require('../images/'+sinleImageData.fileName);
        imageDataArr[i]=sinleImageData;
    }
    return imageDataArr;
})(imageDatas);


var GalleryByReactApp = React.createClass({
  render: function() {
    return (
      <section className="stage">
      <section className="img-sec"></section>
          <nav className="controller-nav"></nav>
      </section>
    );
  }
});
React.render(<GalleryByReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryByReactApp;
