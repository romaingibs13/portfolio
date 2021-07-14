// Run this example by adding <%= javascript_pack_tag 'MyPage_typescript' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
import * as React from 'react';
import * as ReactDOM from 'react-dom'
import MyPage from '../Components/MyPage';

// document.getElementById('input').addEventListener('change', (o: any) => {
// //If you don't need to resize the image, you can get the blob to upload from the 
// //FileList (e.g. doUpload(o.target.files[0]);

// // if(o.target.files.length > 0) {
//   // resizeImage(o.target.files[0], 200, 200).then(blob => {
//   resizeImage(o.target.files[0], 200, 200) 
//     //You can upload the resized image: doUpload(blob)
//     // document.getElementById('img').src = URL.createObjectURL(blob);
//   // }, err => {
//     // console.error("Photo error", err);
//   // });
// // }});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<MyPage />, document.body.appendChild(document.createElement('div')));


});
