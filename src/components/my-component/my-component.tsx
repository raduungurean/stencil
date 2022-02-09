import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @State() value: string;

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
        <label>
          Name: {this.value}
          <input type="text" value={this.value} onInput={(event) => this.handleChange(event)} />
        </label>
    );
  }
}
