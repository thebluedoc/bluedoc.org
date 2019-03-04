import React from 'react'
import cn from './dropdown.module.scss'
import Icon from './icon';

class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props);

    const {value, options} = props;

    this.state = {
      open: false,
      value: value ? value : options[0].value
    }
  }

  handleChange = (value) => {
    const {onChange} = this.props;
    if(this.state.value === value) return;
    if(onChange) {
      onChange(value);
    } else {
      this.setState({value, open: false})
    }
  }

  handleToggleOpen = () => this.setState({open: !this.state.open})

  render() {
    const { options=[], desLabel } = this.props;
    const { open } = this.state;
    const curText = options.find(v => v.value === this.state.value).text;
    return (
      <div className={cn.wrap}>
        <div className={cn.label} onClick={this.handleToggleOpen}>
          {curText}<Icon className={`${cn.arrow} ${open ? cn.open : ''}`} name="down"/>
        </div>
        <ul className={`${cn.optionsBox} ${open ? '': cn.hidden}`}>
          {desLabel && <label className={cn.des}>{desLabel}</label>}
          {options.map(({value, text}) => (
            <li
              className={`${cn.item}`}
              key={value}
              onClick={() => this.handleChange(value)}
            >
              {value === this.state.value && <Icon className={cn.selected} name="select"/>}
              {text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Dropdown
