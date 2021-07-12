// Run this example by adding <%= javascript_pack_tag 'MyPage_typescript' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
import * as React from 'react';
import * as ReactDOM from 'react-dom'
import MyPage from '../Components/MyPage';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<MyPage name="React Typescript" />, document.body.appendChild(document.createElement('div')));
});
