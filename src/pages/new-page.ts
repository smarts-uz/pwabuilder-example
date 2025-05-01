import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('new-page')
export class AppSettings extends LitElement {
    static styles = [
        css`
          :host {
            display: block;
            padding: 1rem;
          }

          .container {
            max-width: 800px;
            margin: 0 auto;
          }

          h1 {
            color: var(--sl-color-primary-600);
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          p {
            color: var(--sl-color-neutral-700);
            line-height: 1.6;
            margin-bottom: 1rem;
          }
        `
    ];

    render() {
        return html`
          <div class="container">
            <h1>Welcome to the New Page</h1>
            <p>
              This is a new page component built with Lit. You can customize this content
              to display whatever information you'd like.
            </p>
            <p>
              The page is styled using CSS custom properties that match the Shoelace design system,
              ensuring consistent theming across your application.
            </p>
          </div>
        `;
    }
}
