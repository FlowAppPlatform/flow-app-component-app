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
      ],
      iconUrl: '/assets/images/app-component.svg',
      name: 'App',
      componentType: 'app',
      category: 'General',
      parent: null,
      showOnComponentsPanel: false,
      isDeleteable: true,
      allowsChildren: true,
      isValuable: true, // this flag pops up a DELETE modal when the delete button is clicked. False will not show the modal.
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  renderContent() {
    return (
      <div>
        {' '}
        <div>App </div> {this.renderChildren()}{' '}
      </div>
    );
  }

  shouldRenderChild(childId) {
    if (
      this.getComponentType(childId) !== 'page' &&
      this.getComponentType(childId) !== 'dirctory'
    ) {
      return true;
    }

    return false;
  }

  renderNav() {
    return <span>Hello</span>;
  }
}

export default App;
