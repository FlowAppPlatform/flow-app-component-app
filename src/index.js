import React from 'react';

import AppComponent from 'flow-app-component';

class App extends AppComponent {
  constructor(props) {
    super(props);
    const newState = {
      properties: [
        {
          categoryName: 'General',
          categoryDescription: 'Basic settings about my app.',
          properties: [
            {
              id: 'title',
              name: 'App Name',
              description: 'Your app name',
              type: 'text',
              options: {},
              data: null,
            },
            {
              id: 'description',
              description: "Your app's description",
              name: 'App Description',
              type: 'description',
              options: {},
              data: null,
            },
            {
              id: 'home-page',
              description: "Your app's home page",
              name: 'Home Page',
              type: 'select-page',
              options: {},
              data: null,
            },
            {
              id: 'not-found-page',
              description: "Your app's 404 page",
              name: 'Not Found Page',
              type: 'select-page',
              options: {},
              data: null,
            },
            {
              id: 'error-page',
              description: "Your app's error page",
              name: 'Error Page',
              type: 'select-page',
              options: {},
              data: null,
            },
          ],
        },
        {
          categoryName: 'Style and Branding',
          categoryDescription: 'Change style and branding of your app',
          properties: [
            {
              id: 'square-logo',
              name: 'Square Logo',
              description: "Upload your app's logo",
              type: 'image',
              options: {
                sizeRequirement: 'square',
              },
              data: null,
            },
          ],
        },
        {
          categoryName: 'Events',
          categoryDescription: '',
          properties: [
            {
              id: 'on-load',
              name: 'App Loaded',
              type: 'graph',
              options: {},
              data: null,
            },
          ],
        },
        {
          categoryName: 'Roles',
          categoryDescription: 'Roles for app',
          properties: [
            {
              id: 'role-form',
              name: 'Add Role',
              type: 'single-input-form',
              options: {},
              data: null,
            },
          ],
        },
      ],
      iconUrl: '/assets/images/app-component.svg',
      name: 'App',
      componentType: 'app',
      category: 'General',
      parent: null,
      showOnComponentsPanel: false,
      isDeleteable: false,
      // this flag pops up a DELETE modal when the delete button is clicked. False will not show the modal.
      isValuable: true,
      allowsChildren: true,
      allowedChildTypes: ['directory', 'page', 'checkbox', 'container', 'link', 'image', 'input', 'form', 'search', 'text', 'loader', 'radio', 'map', 'nav', 'video', 'dropdown', 'list'],
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  renderContent() {
    return (
      <div>
        {this.renderChildren()}
      </div>
    );
  }

  shouldRenderChild(childId) {
    if (
      this.getComponentType(childId) !== 'page' &&
      this.getComponentType(childId) !== 'directory'
    ) {
      return true;
    }

    return false;
  }

  renderNav() {
    return <span></span>;
  }
}

export default App;
