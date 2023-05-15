# Business Card Generator App

This is a Svelte application that generates a business card based on user input. The app consists of three main components:

- `baseTemplate`: This component is responsible for rendering the card container with a front and back side. It receives a `palettes` prop, an array of color palettes to choose from, and a `paletteIndex` prop, an integer that determines which palette to use. The component uses the selected palette to set the card's background colors and also has a placeholder for the card's front and back content.

- `form`: This component displays a form that allows the user to input their business card information, such as first name, last name, job title, and contact information. The form also allows the user to upload a logo for their card.

- `TemplateColor`: This component is responsible for rendering the color picker that allows the user to select from a list of predefined color palettes. It receives a `templateColors` prop, an array of color palettes to choose from, and a `paletteIndex` prop, an integer that determines which palette to use.

## How to Use
You can have a acces to the app by following this link : https://devoirs.rogeaux.com/eliottrogeaux/business-card-generator/

To use this application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal and run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.
4. Open a browser and navigate to http://localhost:5173 to view the app.

Once the app is running, you can choose from four different models and you can select a color palette by clicking on the color picker, fill out the form with your business card information, and upload a logo if desired. The app will generate a preview of your business card in real-time as you fill out the form. Once you have created you business card you can download it as a PDF file



