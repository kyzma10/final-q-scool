import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';


class Sidebar extends Component {

  showHideSidebar = () => {
    document.getElementById('sidebar-right').classList.toggle('hidden');
  }

	setSize = function(value, array) {
      const size = Number(value);
			if(size > 7 && size < 25 && Number.isInteger(size)) {
				for(let i = 0; i < array.length; i++) {
					array[i].setAttribute("style", "font-size: " + size + "px;");
				}
			} else {
				for(let i = 0; i < array.length; i++) {
					array[i].setAttribute('style', 'font-size: inherit;');
				}
			}
	}

  setColor = (color, array) => {
			for(let i = 0; i < array.length; i++) {
			array[i].setAttribute("style", "background-color: " + color + ';');
			}
	}

  setFont = (font, arrayP) => {
		let myFont = '';

		switch(font) {
			case 'Anton':
				myFont = font;
				break;

			case 'Lobster':
				myFont = font;
				break;

			case 'Pacifico':
				myFont = font;
				break;

			default:
				myFont = '';
		}

		for(let i = 0; i < arrayP.length; i++) {
			arrayP[i].setAttribute("style", "font-family: " + myFont + ';');
		}
	}

  removeAtr = (array) => {
    for(let i = 0; i < array.length; i++) {
    array[i].removeAttribute("style");
    }
  }

  dellLastP = () => {
    const lastp = document.querySelector('p:last-child');
		if(lastp) {
			lastp.remove();
		}
  }

  render() {
    const { fontGetSize, red, green, blue, yellow, purple, fontSetFamily, handleSubmit } = this.props;
    const allP = document.querySelectorAll('p');

    if(red === true) {
      this.setColor('red', allP)
    }
    else if(green === true){
      this.setColor('green', allP)
    }
    else if(blue === true){
      this.setColor('blue', allP)
    }
    else if(yellow === true){
      this.setColor('yellow', allP)
    }
    else if(purple === true){
      this.setColor('purple', allP)
    }
    else {
      this.removeAtr(allP);
    }

    if(fontSetFamily){
      this.setFont(fontSetFamily, allP);
    }

    if(fontGetSize){
      this.setSize(fontGetSize, allP)
    }

    return(
      <div>
      <div className="show-hide">
        <button id="burger" type="button" name="button" onClick={this.showHideSidebar}>Show/hide panel</button>
      </div>

      <div id="sidebar-right" className="sidebar">
        <ul>
          <li><a>Item1</a></li>
          <li><a>Item2</a></li>
          <li><a>Item3</a></li>
          <li><a>Item4</a></li>
          <li><a>Item5</a></li>
        </ul>
        <form name="formSidebar" onSubmit={handleSubmit}>

          <Field name="fontGetSize" type="number" component="input" placeholder="value must be  8 -24" />

          <div className="check-color">
            <span>
              <label>red</label>
              <Field name="red" type="checkbox" component="input" value="red"
              />
            </span>
            <span>
              <label>green</label>
              <Field name="green" type="checkbox" component="input" value="green"
              />
            </span>
            <br />
            <span>
              <label>blue</label>
              <Field name="blue" type="checkbox" component="input" value="blue"
            />
            </span>
            <span>
              <label>yellow</label>
              <Field name="yellow" type="checkbox" component="input" value="yellow"
              />
            </span>
            <br />
           <span>
              <label>purple</label>
              <Field name="purple" type="checkbox" component="input" value="purple"
            />
           </span>
          </div>

          <Field name="fontSetFamily" component="select">
            <option></option>
            <option value="Anton">Anton</option>
            <option value="Lobster">Lobster</option>
            <option value="Pacifico">Pacifico</option>
          </Field>

        </form>
        <button type="button" id="dellLastP" onClick={this.dellLastP}>Delete last p</button>
    </div>
      </div>
    );
  }
}

Sidebar = reduxForm({
  form: 'sidebarForm'
})(Sidebar)

const selector = formValueSelector('sidebarForm');
Sidebar = connect(
  state => {

    const fontGetSize = selector(state, 'fontGetSize')
    const red = selector(state, 'red')
    const green = selector(state, 'green')
    const blue = selector(state, 'blue')
    const yellow = selector(state, 'yellow')
    const purple = selector(state, 'purple')
    const fontSetFamily = selector(state, 'fontSetFamily')
    return {
      fontGetSize,
      red,
      green,
      blue,
      yellow,
      purple,
      fontSetFamily
    }
  }
)(Sidebar)

export default Sidebar
