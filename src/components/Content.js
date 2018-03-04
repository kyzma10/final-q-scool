import React, { Component } from 'react';

import Sidebar from './Sidebar';

class Content extends Component {
  render() {
    return(
      <div className="content-box clearfix">
        <div className="content">

          <h1>Lorem Ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quis
            elit pharetra luctus. Aliquam ultricies dui elit, vitae consequat ante
            volutpat ac. Duis elementum interdum cursus. Vestibulum vitae ante magna.
            In faucibus nunc et massa viverra, non sollicitudin velit venenatis.
            Praesent facilisis diam porttitor massa convallis, nec pulvinar leo posuere.
            Sed nec ex a velit vestibulum mattis. Aliquam justo dui, viverra et nibh a,
            feugiat vehicula justo. Maecenas neque dolor, aliquet eu laoreet vel,
            tempus consequat ligula. Aliquam eleifend volutpat lacus, et faucibus
            erat scelerisque eu. Maecenas semper est in ligula ultricies, at placerat
            orci faucibus. Vivamus varius tellus non felis varius ultrices.
          </p>

          <p>Suspendisse potenti. Duis facilisis feugiat lacus, non luctus sapien bibendum
            eget. Mauris nec nisi mattis, dapibus lectus sed, ultricies nunc. Donec
            fermentum nisl id justo consequat, id auctor diam imperdiet. Aenean dictum
            cursus odio at facilisis. Pellentesque vestibulum sodales arcu, vitae porta
            elit commodo et. Nullam vel imperdiet odio. Etiam bibendum ipsum ligula, in
            finibus est sollicitudin sodales. Pellentesque id laoreet risus, et accumsan
            quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>

          <p>Mauris in eros venenatis, cursus urna non, tristique nibh. Donec sodales quam
            purus, vel tincidunt velit aliquet quis. Nullam fringilla dignissim urna,
            vel fringilla eros eleifend ultrices. Pellentesque at lorem nunc. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Etiam iaculis libero condimentum, gravida justo ut, luctus odio. Nunc feugiat
            diam sit amet dui ornare convallis. Donec efficitur lorem nisi, id fringilla
            odio feugiat at. Nunc iaculis luctus quam sit amet viverra. Suspendisse dui
            ante, varius a dictum sed, bibendum sed erat. Pellentesque ac pharetra diam.
            Phasellus non nulla luctus, viverra orci vitae, consequat ipsum. Phasellus
            tincidunt, sem ut aliquam aliquam, sapien lacus rhoncus felis, at vulputate
            erat magna rhoncus dui. Vivamus posuere nisl augue, eu interdum est aliquet
            eget. Aenean id mattis nisl.</p>

        </div>
      <Sidebar />

    </div>
    );
  }
}

export default Content
