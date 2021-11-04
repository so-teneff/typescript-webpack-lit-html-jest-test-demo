import {html, TemplateResult} from 'lit';

export default function sayHello(name: string): TemplateResult {
  return html`<h1>Hello ${name}</h1>`;
}
